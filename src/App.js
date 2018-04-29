import React, { Component } from 'react';

import TodoStore from './store/TodoStore'

import './App.css'

class App extends Component {
  constructor(props) {
    this.store= {
      todoStore: new TodoStore()
    }
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
