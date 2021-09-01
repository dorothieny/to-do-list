import React, {Component} from "react";
import './todo-list-item.css'
class ToDoListItem extends Component {
    render(){
        const {label, id, onDelete, important, onImportant} = this.props;
        const liStyle = {
            color: important? 'tomato' : 'black'
        }
        return(
            <>
            <span
            className="todo-list-item"
            style={liStyle}>
                {label}</span>
            <button
            onClick={()=>onDelete(id)}>
                Удалить
            </button>
            <button
            onClick={()=>onImportant(id)}>
                Важное
            </button>
            </>
        )
    }
    
}
export default ToDoListItem;