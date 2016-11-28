import React, { Component } from 'react';
import Header from './Header';

class Base extends Component{
  render(){

      return(
        <div>
          <Header />
          <div className="page-wrap">
            <div className="container">
              {this.props.children}
            </div>
          </div>
        </div>

      )
  }
};

export default Base;
