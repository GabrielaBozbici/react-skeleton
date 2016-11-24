import React, { Component } from 'react';
import List from './List.jsx'

class ListManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:["egg"],
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
    var divStyle = {
      marginTop: 10
    };
    var headingStyle = {

    };
    if(this.props.headingColor){
      headingStyle.backgroundColor = this.props.headingColor;
    }

    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className=" raw panel-body">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="col-sm-9">
                <input className="form-control" onChange={this.handleChange.bind(this)} value={this.state.newItemtext} />
              </div>
              <div className="col-sm 2">
                <button className="btn btn-primary">add</button>
              </div>
            </form>
          </div>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
};

export default ListManager;
