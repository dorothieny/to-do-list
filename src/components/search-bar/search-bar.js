import React, {Component} from 'react';
class SearchBar extends Component{
  state = {
    term: '',
  }
  onFilter=(e)=>{
    const{onFiltering}= this.props;
    this.setState({
      term:e.target.value
    })
    onFiltering(e.target.value);
  }; 

 buttons = [
   {name: 'all', label: 'All'},
   {name: 'important', label: 'Important'}
 ];
 

    render(){
      const{onFilter, filter} = this.props;
      const styleBtn = {
        backgroundColor: 'red'
      }
      const btns = this.buttons.map((el)=>{
        const isActive = filter === el.name;
        const clazz = isActive? styleBtn : null;
        return (
          <button
          style = {clazz}
          name={el.name}
        onClick={()=>onFilter(el.name)}>{el.label}</button>
        )
      })
  
      
      return (
        <>
        <input placeholder="Search tasks" 
        onChange={this.onFilter}
        value={this.state.term}/>
        {btns}
        </>
      )
    }
  };
export default SearchBar;