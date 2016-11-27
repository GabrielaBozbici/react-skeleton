import React, { Component } from 'react';

export default class Item extends Component {

  render(){
    var divStyle = {
      marginTop: 10,
      boderColor: '#eee'
    };

    var bgColor = {    };
    var textColor = { };
    if(this.props.bodyColor){
      bgColor.backgroundColor = this.props.bodyColor;
    };
    if(this.props.headerColor){
      bgColor.backgroundColor = this.props.headerColor;
    };
    if(this.props.textColor){
      textColor.color=this.props.textColor
    }

    if(this.props.hasHeader === true){
      return(
        <div className="panel panel-primary" style={divStyle}>
          <div className="panel-heading small" style={bgColor}>
            <span>{this.props.head}</span>
            <h6>{this.props.bottom}</h6>
          </div>
          <div className="panel-body"></div>
        </div>
      )
    } else {
      return(
        <div className="panel panel-primary topTxt" style={divStyle}>
          <div className="panel-body" style={bgColor}>
            <h5 style={textColor}>{this.props.heading}</h5>
            <h6 style={textColor}>{this.props.subheading}</h6>
          </div>

        </div>
      )
    }
  }
};
