import React, { Component } from 'react';
import ListItem from './ListItem.jsx';

var ingredients = [{
  id: 1,
  text: "ham"
},
{
  id: 2,
  text: "cheese"
},
{
  id: 3,
  text: "potatoe"
}];

class List extends Component{
  render(){
    var listItem = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />
    });
    return ( <ul>{listItem}</ul> )
  }
};

export default List;
