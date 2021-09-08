import React, {Component} from 'react';
import ToDoList from '../todo-list/todo-list'
import AppHeader from '../app-header/app-header'
import SearchBar from '../search-bar/search-bar.js'
import NewTask from '../adding-form/adding-form';
import './app.css';

class App extends Component {
  idState= 4;
  state={
    toDoData:[
      {label:'Drink Coffee', important: false, id: 1},
      {label: 'Crate React App', important: true, id: 2},
      {label: 'Have lunch', important: false, id: 3}
    ],
    term: '',
    filter: 'all'
  }
  onDelete = (id)=>{
    this.setState(({toDoData})=>{
      const index = toDoData.findIndex((el)=> el.id === id);
      const newArr = [...toDoData.slice(0,index), ...toDoData.slice(index+1)]
      return{
        toDoData: newArr
      }
    })
  }
  onAddingTask = (value)=>{
    const newTask = {label:value, important: false, id:this.idState++};
    this.setState(({toDoData})=>{
      const newArr = [...toDoData, newTask]
      return{
        toDoData: newArr
      }
    })
  }
  onImportant =(id)=>{
    this.setState(({toDoData})=>{
      const index = toDoData.findIndex((el)=> el.id === id);
      const oldItem = toDoData[index];
      const newItm = {...oldItem, important: !oldItem.important}
      const newArr = [...toDoData.slice(0,index),
        newItm,
        ...toDoData.slice(index+1)]
      return{
        toDoData: newArr
      }
    })
  }
  onFiltering =(param)=>{
    this.setState({
      term: param
    })
  }
  search =(itemarr, term)=>{
    if(term.length === 0){
      return itemarr;
    }
    return itemarr.filter((el)=> {
      return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1});
  }
  filter = (arr, filter)=>{
    switch (filter){
      case 'all':
        return arr;
      case 'important':
      return arr.filter((el)=> el.important);
      default:
        return arr;
    }
  }
onFilter=(state)=>{
  console.log('yes')
  this.setState({
    filter: state
  })
}
  
  render(){
    const {toDoData, term, filter}= this.state;
    const visibleItems = this.filter(this.search(toDoData, term), filter)
    const importantCount = toDoData.filter((el)=>el.important === true).length;
    const otherCount = toDoData.length - importantCount;
    return (
    <div className="app">
    <AppHeader 
    importantCount={importantCount}
    otherCount={otherCount}
    />
    <SearchBar
     onFiltering={this.onFiltering}
     onFilter={this.onFilter}
     filter={this.state.filter}/>
    <ToDoList 
    todos={visibleItems}
    onDelete={this.onDelete}
    onImportant={this.onImportant}/>
    <NewTask 
    onAddingTask={this.onAddingTask}/>
    </div>
    )
  }
}

export default App;