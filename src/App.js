import React, { Component } from "react";
import TodoList from "./Component/TodoList";
import "./App.css";

class App extends Component{
 
  state = {
    todo: '',
    list: []
  }

  handleChange (e){
  this.setState({
   todo: e.target.value
  });
}


addTheTodo(){
  const {todo,list} = this.state
  if(todo === "") return

  const dataToAdd = {
    done: false,
    name: todo
  }

  list.push(dataToAdd)
  this.setState({
    list,
    todo: ""
  })
}



doneTheTodo(e){
   const {value,checked} = e.target
   const {list} = this.state
   const i = list.findIndex(f => f.name === value)
   if( i === -1) return
   list [i].done = checked
   this.setState({
     list
   })
}

renderList(){
  const  {list} = this.state
  const data = list.map((d,i)=>{
    return (
     
      <Mylist key={i} onChange={this.doneTheTodo.bind(this)} done={d.done} name={d.name} />
    )
  } )
   return data 
}

  render() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="form-group">
          <label htmlFor="User" id="User"> Name</label>
      <input type="text"  className="from-control w-100" id="user" onChange={this.handleChange.bind(this)} value={this.state.todo} />

        </div>
       
      <button className="btn btn-primary" onClick={this.addTheTodo.bind(this)}>Add</button>

      </div>
      {this.renderList()}
   
    </div>
  );
}
}

  const Mylist = (props) =>{
  let name
  let myClass
  if(props.done){
    name = <strike >props.name</strike>
    myClass = "alert alert-success"
  }else{
    name = props.name
    myClass = "alert alert-info"
  }
  return(
    <React.Fragment>
      <div className={myClass}>

     
      <div className="checkbox ">
  <label><input  value={props.name} onChange={props.onChange} type="checkbox" checked={props.done} />{name}</label>
  </div>
      </div>
    </React.Fragment>
  )
}




export default App;
