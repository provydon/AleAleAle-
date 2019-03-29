import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default List;

// export default class App extends Component {
//   removeItem(e) {
//       this.props.removeTodo(item);
//   }
//   render() {
//       return(
//           <ul>
//               { this.props.term.map((todo) => {
//                   return <li onClick={() => { this.removeItem(todo)}} key={todo}>{ todo }</li>
//               })}
//           </ul>
//       );
//   }
  
// }