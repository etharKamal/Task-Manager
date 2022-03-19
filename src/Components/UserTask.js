import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from "react-redux";
import {Form} from 'react-bootstrap'



function UserTask() {
  
 
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  

  const [characters, updateCharacters] = useState(userList);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
    
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map((task, index) => {
                  {console.log(task.task_title)}
                  return (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <li className  = "task" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <h3>
                            { task.task_title }
                         
                          </h3>
                          <p>{task.task_description} </p>
                          <p>{task.task_duration} </p>
                          <p>{task.task_status} </p>
                          <Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Set Task To Done "
  />

</Form>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default UserTask;
