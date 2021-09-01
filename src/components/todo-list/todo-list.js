import React from 'react';
import ToDoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'
const ToDoList = ({todos, onDelete, onImportant}) => {
    const elements = todos.map((item) => {
        return (
            <li key={item.id}
            className="list-group-item">
                <ToDoListItem {...item} onDelete={onDelete} onImportant={onImportant}/>
            </li>
        )
    });
    return(
        <ul className="list-group todo-list">
            {elements}
        </ul>
       
    )
}
  export default ToDoList;