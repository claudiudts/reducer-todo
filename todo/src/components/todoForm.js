import React from 'react';

class TodoForm extends React.Component {
    
  
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.handleAddTodo('new todo')
    }


    render() {
        return( 
        <div className='todoForm'>
        <form onSubmit={this.handleSubmit}>
          <labe>
            What is your task?
            <input />
            <button>Make it happen</button>
          </labe>
        </form>
      </div>)
    }
}

export default TodoForm;