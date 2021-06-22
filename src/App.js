import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './component/about/about';
import TodoList from './component/todoList';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={TodoList} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    )
  }
}

export default App;
