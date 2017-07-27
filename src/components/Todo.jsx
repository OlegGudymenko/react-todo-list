import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button'

function Todo(props) {
  function handleChange (){
    props.onStatusChange(props.id)
  }
  return(
    <div className={`todo ${props.completed ? ' completed' : '' } `}>
      <Checkbox cheched={props.completed} onChange={handleChange} />

      <span className='todo-title'>{props.title}</span>
      <Button  className='delete icon' icon='delete' onClick={ () => props.onDelete(props.id)}/>
    </div>
  );
}

Todo.PropTypes = {
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onStatusChange : React.PropTypes.func.isRequired,
  onDelete : React.PropTypes.func.isRequired
}

 export default Todo;
