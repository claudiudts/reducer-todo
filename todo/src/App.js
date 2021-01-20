import './App.css';
import TodoList from './components/todoList'; 
import TodoForm from './components/todoForm';
import { useReducer } from 'react';
import reducer, { initialState } from './reducer';
import { addTodo } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleAddTodo = (title) => {
    //it takes in action object and passes it into the reducer we connected it to
    //pass in the current state of our APP
    //get new state made and re renders
    dispatch(addTodo(title));
  };


  return (
    <div className="App">
     <h1>Todo List!</h1>
    {/* <button onClick={handleClick}>Test button</button> */}
    <TodoList todos={state.todos}/>
    <TodoForm  handleAddTodo={handleAddTodo}/>
     
    </div>
  );
}

export default App;


//The app will have a list of things to do
// also an add button with an input field  
// and a clear button
//