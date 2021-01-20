

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

        return({...state, todos:[...state.todos, newTodo]})
        default:
            return state;
    }
}


export default reducer;