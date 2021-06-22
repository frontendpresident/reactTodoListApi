import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './component/about/about';
import TodoList from './component/todoList';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='tasks' component={TodoList} />
          <Route path='about' component={About} />
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
