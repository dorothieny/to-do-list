import React, {Component} from 'react';
export default class NewTask extends Component {
    state={
        value:""
    }
    onChangeInput=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    onSubmit =(e)=>{
        e.preventDefault();
        this.props.onAddingTask(this.state.value)
        this.setState({
            value: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
            <input placeholder="Set new task" value={this.state.value}
            onChange={this.onChangeInput}/>
            <button
            onClick={this.onSubmit}>Добавить</button>
            </form>
            )
    }
}