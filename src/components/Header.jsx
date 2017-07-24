import React from 'react';


function Header(props){
  return(
    <header>
      <h1> {props.title} </h1>
    </header>
  )
}
Header.PropTypes = {
  title: React.PropTypes.string
};

Header.defaultProps = {
  title: 'React todo'
}
export default Header;
