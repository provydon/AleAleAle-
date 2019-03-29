// function Home() {
//   return <div>Welcome to Next.js!</div>;
// }

// export default Home;

import React, { Component } from 'react';
import './app.css';
import List from './list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    <App items ={this.state.items} removeTodo={this.removeTodo}/>
  }

  removeTodo(name){
    this.setState({
        todo: this.state.todo.filter(el => el !== name)
    })
}

  removeItem(e) {
    this.props.removeTodo(item);
}
render() {
    return(
        <ul>
            { this.props.term.map((todo) => {
                return <li onClick={() => { this.removeItem(todo)}} key={todo}>{ todo }
                 <button>delete</button></li>
            })}
        </ul>
    );
}

  

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}