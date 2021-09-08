import React, {Component} from "react";
import './todo-list-item.css'
class ToDoListItem extends Component {
    render(){
        const {label, id, onDelete, important, onImportant} = this.props;
        const liStyle = {
            color: important? 'rgb(205, 181, 47)' : 'black'
        }
        return(
            <div className='list-item'>
            <span
            className="todo-list-item"
            style={liStyle}>
                {label}</span>
            <button
            className="delete"
            onClick={()=>onDelete(id)}>
                Удалить
            </button>
            <button
             className="important"
            onClick={()=>onImportant(id)}>
                Важное
            </button>
            </div>
        )
    }
    
}
export default ToDoListItem;