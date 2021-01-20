import React from 'react';

class TodoForm extends React.Component {
  state = {
    inputText:''
  }  
  
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.handleAddTodo(this.state.inputText)
    }

  handleChange = (e) => {
      this.setState({
      inputText:e.target.value
    })
  }

   
    render() {
      // console.log('component state', this.state)
        
      return( 
        <div className='todoForm'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input onChange={this.handleChange} value={this.state.inputText}/>
            <button>Make it happen</button>
          </label>
        </form>
      </div>)
    }
}

export default TodoForm;