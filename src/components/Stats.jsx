import React from 'react';


function Stats (props){
  let total = props.todos.length;
  let completed = props.todos.filter(item => item.completed).length;
  let rest = total - completed;

  return(
    <table className='stats'>
      <tbody>
        <tr>
          <th>Всего задач</th>
          <td>{total}</td>
        </tr>
        <tr>
          <th>Выполнено</th>
          <td>{completed}</td>
        </tr>
        <tr>
          <th>Осталось</th>
          <td>{rest}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;
