import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import FormInput from './components/FormInput';

function App() {
  return (
    <div className="app">
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h1 className='text-4xl font-bold text-[#61DAFB] mb-10'>React Todo App</h1>
      </div>
      <div className='list'>
        <TodoItem />
      </div>
      <div>
        <FormInput />
      </div>
    </div>
  );
}

export default App;
