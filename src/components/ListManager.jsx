import React, { Component } from 'react';
import List from './List.jsx'

class ListManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:["bla", "blu"],
      newItemtext:''
    };
  }


  handleChange(e){
    this.setState({ newItemtext: e.target.value });
  }
  
  handleSubmit(e){
    e.preventDefault();
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemtext);
    this.setState({items: currentItems, newItemtext:''})
  }

  render(){
    console.log("this-u: ", this)
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)} value={this.state.newItemtext} />
          <button>add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
};

export default ListManager;
