import Task from './Task'
import '../Style/style.css'

const Tasks = ({tasks, onToggle})=>
{
    
    return (
        <>
        {tasks.map((task) =>(

        <Task key={task.id} 
              task = {task} 
              onToggle = {onToggle}
            />
       ))}
       
        </>
    )
    
}

export default Tasks