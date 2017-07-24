import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo'

// const title = React.createElement('h1', { className: 'title' }, 'React');

function App(props){
  return (
    <main>
      <Header />
      <section className='todo-list'>
          {props.todos.map( (todo , index) => <Todo title={todo.title} key={index} completed={todo.completed} /> )}

      </section>
    </main>
  )
}

App.propTypes = {
  title: React.PropTypes.string,
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })).isRequired
}


ReactDOM.render(<App todos={todos} />,document.getElementById('root'));
