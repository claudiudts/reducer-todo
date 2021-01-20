

//base data and base shape for the application
export const initialState = {
    todos: [{
        title: 'trick pony',
        id: 0,
        completed: false
      },
      {
        title: 'tester 2',
        id: 1,
        completed: false
      },
      {
        title: 'todo 3',
        id: 2,
        completed: false
      }
    ] 
}

const reducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            const newTodo = {
                id: state.todos.length,
                completed: false,
                title: action.payload
            };
        return({...state, todos:[...state.todos, newTodo]});
            case("TOGGLE_COMPLETED"):
                //1. want to map through all the todos
                //2. if todos has the ID we are looking for (in the action.payload)
                //3. return a copy of that item with Completed = true
                return({...state, todos:state.todos.map(todo=>{
                    if (todo.id === action.payload) {
                        return({...todo, completed: !todo.completed});
                    } else {
                        return(todo);
                    }
                })});
            case("CLEAR_COMPLETED"):
                return{
                        ...state,
                        todos: state.todos.filter(todo => {
                            return(!todo.completed);
                        })
                    }
        default:
            return state;
    }
}


export default reducer;