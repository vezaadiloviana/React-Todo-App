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
            <TodoItem key={item.id} todo={item} />
          )}
        </div>
        <div>
          <FormInput />
        </div>
      </div>
    );
  }
}

export default App;
