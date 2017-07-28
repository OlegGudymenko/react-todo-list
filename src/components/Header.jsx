import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch'

function Header(props){
  return(
    <header>
      <Stats todos={ props.todos}/>
      <h1> {props.title} </h1>
      <Stopwatch />
    </header>
  )
}
Header.PropTypes = {
  title: React.PropTypes.string.isRequired,
  todos: React.PropTypes.array.isRequired
};

Header.defaultProps = {
  title: 'React todo'
}
export default Header;
