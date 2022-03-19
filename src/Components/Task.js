import {FaTimes} from 'react-icons/fa'
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import {  deleteUser } from "../State-Management/features/Users";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import * as bs from 'react-bootstrap'
 

const Task = ({task, onToggle}) =>
{
    const dispatch = useDispatch();
const onDelete = () => {

        dispatch(deleteUser({ id: task.id }));
       
      }
      const [selectedOption, setSelectedOption] = useState('');

      const [value,setValue]=useState('');
      const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
      }
    
      const handleSelectQroup=(e)=>{
        console.log(e);
        setSelectedOption(e)
      }
    return (
   <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle (task.id)}>
        <h3>{task.task_title} <FaTimes style = {{color:'red', cursor:'pointer'}}
        onClick = {() => onDelete(task.id)} /></h3>
        <p>{task.task_description}</p>
        <p>{task.task_duration}</p>
        <p>{task.task_status}</p>
        <bs.Row><bs.Col>
                          <DropdownButton
      
      variant="secondary"
      title="Choose User"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
          
              <Dropdown.Item eventKey = {task.name} >{task.name}</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton>
      <p>Asigned To: {value}</p>
      <DropdownButton
      
      variant="secondary"
      title="chooser Group"
      id="dropdown-menu-align-right2"
      onSelect={handleSelectQroup}
        >
              <Dropdown.Item eventKey = {task.group_name} >{task.group_name}</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton>
      <p>Asigned To: {selectedOption}</p>
                            </bs.Col></bs.Row>
    
        </div>
    )

} 

export default Task