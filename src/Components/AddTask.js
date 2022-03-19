import { useState } from 'react'
import { DateRangePicker } from 'rsuite';
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../State-Management/features/Users";


const AddTask = ({ onAdd }) => {

  
  const [task_title, setTitle] = useState('')
  const [task_description, setDescription] = useState('')
  const [task_duration, setDuration] = useState('')
  const [task_status, setStatus] = useState(false)
  console.log (task_title)
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  console.log (userList)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addUser({
        id: userList[userList.length - 1].id + 1,
        task_title,
        task_description,
        task_duration,
        task_status
      })
    );
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task Tittle</label>
        <input
          type='text'
          placeholder='Add Task'
          value={task_title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Task Description</label>
        <input
          type='text'
          placeholder='Add Task'
          value={task_description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Duration</label>
        <p>Select Task Duration</p>
        <DateRangePicker 
        value = {task_duration}
        onChange={(e) => setDuration(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Status</label>
        <input
          type='checkbox'
          checked={task_status}
          value={task_status}
          onChange={(e) => setStatus(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn-task btn-block' />
    </form>
  )
}

export default AddTask