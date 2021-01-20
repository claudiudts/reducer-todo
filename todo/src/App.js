import './App.css';

function App() {
  const todos = [{
    title: 'todo 1',
    id: 0,
    completed: false
  },
  {
    title: 'todo 2',
    id: 1,
    completed: false
  },
  {
    title: 'todo 3',
    id: 2,
    completed: false
  }]
  
  return (
    <div className="App">
     <h1>Todo List!</h1>
     <div className="todoList">
       <h3>List of Tasks for today!</h3>
       <ul>
         {
           todos.map(todo => {
             return(<li>{todo.title}</li>)
           })
         }
       </ul>
       <button>Clear Completed!</button>
     </div>
      <div className='todoForm'>
        <form>
          <labe>
            What is your task?
            <input />
            <button>Make it happen</button>
          </labe>
        </form>
      </div>
    </div>
  );
}

export default App;


//The app will have a list of things to do
// also an add button with an input field  
// and a clear button
//