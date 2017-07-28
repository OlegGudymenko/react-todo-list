import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button'

class Todo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false
    }
    this.handleSubmite = this.handleSubmite.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.editing){
      this.refs.title.focus;
    }
  }
  handleSubmite(event){
    event.preventDefault();
    let title = this.refs.title.value;
    this.props.onEdit(this.props.id , title)
    this.setState({
      editing: !this.state.editing
    })
  }
  handleEdit(event){
    event.preventDefault();
    this.setState({
      editing: !this.state.editing
    })
  }

  renderDisplay(){
    return(
      <div className={`todo ${this.props.completed ? ' completed' : '' } `}>
        <Checkbox cheched={this.props.completed}
          onChange={ () => this.props.onStatusChange(this.props.id)} />
        <span className='todo-title'>{this.props.title}</span>
        <Button className="edit icon" icon="edit" onClick={this.handleEdit}/>
        <Button
          className='delete icon'
          icon='delete'

          onClick={ () => this.props.onDelete(this.props.id)}
        />
      </div>
    )
  }
  renderForm(){
    return(
      <form className="todo-edit-form" onSubmit={this.handleSubmite} >
        <input type="text" ref='title' defaultValue={this.props.title}/>
        <Button className='save icon' icon='save' type='submite'/>
      </form>
    )
  }

  render (){
    return(this.state.editing ? this.renderForm() : this.renderDisplay() );
  }


}

Todo.PropTypes = {
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onStatusChange : React.PropTypes.func.isRequired,
  onDelete : React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired
}

 export default Todo;
