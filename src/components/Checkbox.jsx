import React from 'react';

function Checkbox (props){
  console.log(props, 'checkbox')
  return(
      <button className='checkbox icon' onClick={props.onChange}>
        <i className="material-icons">{props.cheched ? 'check_box' : 'check_box_outline_blank'} </i>
      </button>
    
    )
}




Checkbox.propTypes = {
    cheched : React.PropTypes.bool.isRequired,
    onChange : React.PropTypes.func.isRequired
  }
export default Checkbox;

































// class Checkbox extends React.Component{
//   constructor(props){
//     super(props);
//
//     this.state = {
//       checked : this.props.initialCheched
//     }
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(e){
//     this.setState({
//         checked : !this.state.checked ,
//     })
//
//   }
//   render(){
//     return(
//
//       <button className='checkbox icon' onClick={ this.handleClick}>
//         <i className="material-icons">{this.state.checked ? 'check_box' : 'check_box_outline_blank'} </i>
//       </button>
//     )
//   }
//
//
// }
//   Checkbox.propTypes = {
//     initialCheched : React.PropTypes.bool.isRequired,
//   }
