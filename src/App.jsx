import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// const title = React.createElement('h1', { className: 'title' }, 'React');

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      todos: this.props.initialData
    }
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  nextId(){
    this._nextId = this._nextId || 4 ;
    return this._nextId++;
  }
  handleStatusChange(id){
    let todos = this.state.todos.map(todo => {
      if( todo.id === id ){
          todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({
      todos : todos
    })
  }
  handleDelete(id){
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos})
  }
  // inputTitle
  handleAdd(inputTitle){
    let todo = {
      id: this.nextId(),
      title: inputTitle,
      completed: false ,
    }

    let todos = [...this.state.todos,todo];
    this.setState({todos})
  }
  handleEdit(id,title){
    let todos = this.state.todos.map( todo => {
      if ( todo.id === id ){
        todo.title = title;
      }
      return todo;

    })
    this.setState({todos})
  }
  render (){
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos}/>
      <ReactCSSTransitionGroup
         component='section'
        from className='todo-list'
        transitionName="slide"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={200}>
            {this.state.todos.map( todo =>
              <Todo
                title={todo.title}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                onStatusChange={this.handleStatusChange}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}/>
            )}
        </ReactCSSTransitionGroup>
      <Form onAdd={this.handleAdd}/>
      </main>
    )
  }

}

App.propTypes = {
  title: React.PropTypes.string,
  initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })).isRequired
}


ReactDOM.render(<App initialData={todos} />,document.getElementById('root'));
