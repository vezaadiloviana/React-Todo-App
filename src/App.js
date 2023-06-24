import React from "react";
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import FormInput from './components/FormInput';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "reading a book"
      },
      {
        id: 2,
        title: "workout training"
      }
    ]
  }

  deleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id != id)
    })
  }

  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  } 

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className='logo'>
          <img src={logo} alt="logo" />
          <h1 className='text-4xl font-bold text-[#61DAFB] mb-10'>React Todo App</h1>
        </div>
        <div className='list'>
          {todos.map(item => 
            <TodoItem key={item.id} todo={item} del={this.deleteTask} />
          )}
        </div>
        <div>
          <FormInput add={this.addTask}/>
        </div>
      </div>
    );
  }
}

export default App;
