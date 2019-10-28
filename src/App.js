import React, {Component} from 'react';

import './App.css';

  class App extends component {
    constructor(){
      super();
      this.state = {
        message:"My first React App",
        newTodo: " ",
        todos:[{
          title: 'ACA_411',
          done: false
        },{
          title : 'app',
          done: false
        }]
      };
    }

    newTodoChanged(event) {
      this.setState({
        newTodo: event.target.value
      });
    }

    formSubmitted(event){
      event.preventDefault();
      //console.log(this.state.newTodo);
      this.setStated({
       todos: [...this.state.todos, {
         title: this.state.newTodo,
         done: false
       }]
      });
    }

    render (){
      return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label for ="newTodo">NewTodo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo"/>
          <butto type="submit">Add Todo</butto>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key ={todo.title}> {todo.title} </li>
          })}
        </ul>
      </div>
    );
  }
  }
export default App;
