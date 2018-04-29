import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Store from './store/Store'
import { Todo } from './store/TodoStore'

import './App.css'

@observer
class App extends Component {
  constructor(props) {
    super(props)
    this.store= new Store()
  }

  onAddTodo = (evt) => {
    evt.preventDefault()
    const title = evt.target.elements.title.value
    const todo = new Todo({ title })
    this.store.todoStore.addTodo(todo)
  }

  onEditTodo = (i, evt) => {
    evt.preventDefault()
    const title = evt.target.elements.title.value
    this.store.todoStore.editTodo({title}, i)
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.store.todoStore.todos.map((t, i) => (
            <li key={`${t.title}_${i}`}>
              <form onSubmit={this.onEditTodo.bind(null, i)}>
                {t.title} <input type="text" name="title"/>
              </form>
            </li>
          ))}
        </ul>
        <form onSubmit={this.onAddTodo}>
          <input type="text" name="title"/>
          <button type="submit">Add todo</button>
        </form>
      </div>
    );
  }
}

export default App;
