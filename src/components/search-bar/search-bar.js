import React, {Component} from 'react';
import './search-bar.css'
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
        backgroundColor: 'rgb(131, 46, 46)',
        color: 'white'
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
        <div className="search-bar">
        <input className='input-bar' placeholder="Search tasks" 
        onChange={this.onFilter}
        value={this.state.term}/>
        {btns}
        </div>
      )
    }
  };
export default SearchBar;