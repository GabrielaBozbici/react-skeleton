import React, { Component } from 'react';
import ListItem from './ListItem.jsx';

class List extends Component{
  render (){
      var createItem = function(text, index){
        return (<ListItem key={index} text={text}/>)
      };
       return (<ul>{this.props.items.map(createItem)}</ul>);
    }
}

export default List;
