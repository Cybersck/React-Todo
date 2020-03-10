import React from 'react';
import TodoList from './components/TodoList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

data = [
  {
    task: 'Organize Garage',
    id: 1528817084357,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Complete Assignment',
    id: 1528817084359,
    completed: false
  },
  {
    task: 'Take a Nap',
    id: 1528817084360,
    completed: false
  }
];

title = '';

getNextID = () => {
  let current = 0;
  let next = 0;
  this.data.forEach(i => {
    current = i.id;
    if (current > next) next = current;
  })
  return next+1;
}

addTodo = (e) => {
  e.preventDefault();
  e.target.elements[0].value = '';
  let newTodo = {
    task: this.title,
    id: this.getNextID(),
    completed: false
  }
  this.data.push(newTodo);
  this.title = '';
  this.forceUpdate();
}

handleChange = (e) => {
  this.title = e.target.value;
  this.forceUpdate();
}

updateTodo = (id) => {
    this.data.forEach(i => {
    if (i.id === id) {
      i.completed = !i.completed;
    }
  })
  console.log(this.data)
  this.forceUpdate();
}

clearAll = () => {
  this.data.forEach(i => {
    if (i.completed === true) {
      i.completed = false;
    }
    $("input[type='checkbox']").each(function() {if (this.checked) this.checked = !this.checked});
  });
  this.forceUpdate();
}
completeAll = () => {
  this.data.forEach(i => {
    if (i.completed === false) {
      i.completed = true;
    }
    $("input[type='checkbox']").each(function() {if (!this.checked) this.checked = !this.checked});
  });
  this.forceUpdate();
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <button className='btn btn-danger' onClick={this.clearAll}>Clear All</button>
        <button className='btn btn-success' onClick={this.completeAll}>Complete All</button>
        <form onSubmit={this.addTodo}>
            <input type='text' onChange={this.handleChange}></input>
            <button type='submit' disabled={this.title === ''}>Add TODO</button>
            </form>
        <TodoList data={this.data} update={this.updateTodo}/>
      </div>
    );
  }
}

export default App;
