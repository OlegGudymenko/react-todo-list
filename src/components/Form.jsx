import React from 'react';
import Button from './Button'

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: ''
    };
    this.handleSubmite = this.handleSubmite.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmite(event){
    event.preventDefault();
    let title = this.state.inputValue;
      if (title) {
        this.props.onAdd(title )
        this.setState({
          inputValue: ''
        })
      };
  }
  handleChange(event){
    let title = event.target.value
    this.setState  ({
      inputValue : title
    });
  }
  render (){
      return (
          <form className="todo-form" onSubmit={this.handleSubmite}>
              {/* <input type='text' ref='title' placeholder='Что нужно сделать?' /> */}
            <input
               type='text'
               value={this.state.inputValue}
               placeholder='Что нужно сделать?'
               onChange={this.handleChange}
            />
            <Button type="submite" >Добавить</Button>
          </form>
      )
  }

}


Form.PropTypes = {
  onAdd:React.PropTypes.func.isRequired
}


export default Form;
