import UserNav from '../../Components/UserNav'
import UserTask from "../../Components/UserTask";
import "../../Style/style.css"
import LogOut from '../../Components/LogOut';


function ShowUserTasks() {
  return (
    <>
    <UserNav/>
    <LogOut/>
    <div className="task-container">
<h1>Task Manager</h1>
 <UserTask/>
    </div>
    </>
  );
}

export default ShowUserTasks;