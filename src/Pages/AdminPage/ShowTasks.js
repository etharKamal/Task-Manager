import { useState } from "react";
import '../../index'
import { useSelector, useDispatch } from "react-redux";
import NavBar from '../../Components/NavBar'
import Tasks from '../../Components/Tasks'
import Header from '../../Components/Header'
import AddTask from '../../Components/AddTask'
import '../../Style/style.css'
import LogOut from '../../Components/LogOut'


function ShowTasks() {
  const userList = useSelector((state) => state.users.value);
  const [tasks, setTasks, ] = useState ([userList])
 
  const [showAddTask, setShowAddTask ]= useState (false)
//set task status
const setStatus = (id) => {
  console.log (id)
  setTasks (
    tasks.map ((task) => task.id === id ? {...task, task_status: !task.task_status} : task
    )
  )
}
 
  return (
    <div>
     
    <NavBar/>
    <LogOut />
    <div className="task-container ">
<Header onAdd = {()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
{showAddTask && <AddTask />}
{userList.length > 0  ? (<Tasks tasks ={userList} onToggle = {setStatus}/> ) : 'No Tasks To Show' 
}


    </div>
    </div>
  );
}

export default ShowTasks;