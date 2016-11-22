import React, { Component } from 'react';


class ListItem extends Component{
  render(){
    return(
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    )
  }
};
export default ListItem;
