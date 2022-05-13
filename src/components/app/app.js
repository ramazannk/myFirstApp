import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFiter from '../app-fiter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
    constructor(props){
      super(props)
      this.state = {
        data:[
          {name: "jhon", salary: "400", increase: true, id: 1 , start: false},
          {name: "alex", salary: "4000", increase: false, id: 2 , start: true},
          {name: "ramo", salary: "5000", increase: false, id: 3 , start: false}
        ],
        term: '',
        filter: 'all'
      }
      this.maxId= 4
    }
    onDleteItem = (id) => {
      this.setState(({data}) => {
          return {
              data: data.filter(item => item.id !== id)
          }
      })
  }
  onAddForm = (name, salary)=>{
    const newArr= {
      name,
      salary,
      increase: false,
      id:this.maxId ++,
      start: false
    }
    this.setState(({data})=>{
      const newItem = [...data, newArr]
      return{
        data: newItem
      }
    })
  }

  onToggelIncrease =(id)=>{
    this.setState(({data})=>({
      data: data.map(item=>{
        if(item.id ===id){
          return{
            ...item , increase: !item.increase
          }
        }
        return item;
      })
    }))
  }
  onToggelStart =(id)=>{
    this.setState(({data})=>({
      data: data.map(item=>{
        if(item.id ===id){
          return{
            ...item , start: !item.start
          }
        }
        return item;
      })
    }))
  }
  searchEmp =(items, term)=>{
    if(term.length === 0){
      return items;
    }
    return items.filter(item =>{
      return item.name.indexOf(term)> -1
    })
  }
  onUpdatesearch=(term)=>{
    this.setState({term})
  }
  filterPost =(items, filter)=>{
    switch(filter) {
      case 'start':
        return items.filter(item=> item.start)
      case 'ThenMore1000':
        return items.filter(items=> items.salary > 1000)
      default:
        return items
     }
    
  }
filterItem =(filter)=>{
  this.setState({filter})
}

  render(){
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increaset = this.state.data.filter(item=>item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
          <AppInfo employees={employees} increaset={increaset}/>

          <div className="search-panel">
              <SearchPanel onUpdatesearch={this.onUpdatesearch}/>
              <AppFiter filterItem={this.filterItem}
              filter={filter}
              filterPost={this.filterPost}/>
          </div>
          
          <EmployeesList
          data={visibleData}
          onDelet = {this.onDleteItem}
          onToggelIncrease={this.onToggelIncrease}
          onToggelStart={this.onToggelStart}/>
          <EmployeesAddForm 
            onAdd={this.onAddForm}/>
      </div>
    );
  }
}

export default App;