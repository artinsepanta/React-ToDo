import React, {Component} from 'react';

import './App.css';

  class App extends Component {
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
      newTodo : event.target.value
      });
    }

    formSubmitted(event){
      event.preventDefault();
      //console.log(this.state.newTodo);
      this.setStated({
        newTodo: '',
       todos: [...this.state.todos, {
         title: this.state.newTodo,
         done: false
       }]
      });
    }

    toggleTodoDone (event, index) {
      //console.log(event, target, checked)
      const todos =[...this.state.todos];
      todos[index] = {...todos[index]};
      todos[index].done = event.target.checked;
      this.setStated({
       todos
      });
    }

    removeTodo(index){
      const todos =[...this.state.todos];
     todos.splice(index, 1);
      this.setStated({
       todos
      });
    }

    render (){
      return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label for ="newTodo">NewTodo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo}/>
          <butto type="submit">Add Todo</butto>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (<li key ={todo.title}>
               <input onChange= {(event) => this.toggleTodoDone(event, index)} type='checkbox'/>
               <span className={todo.done ? 'done' : ''}>
               {todo.title} 
               </span>
               <button onClick={()=> this.removeTodo(index)}>Remove</button>
               </li>)
          })}
        </ul>
      </div>
    );
  }
  }

export default App;
