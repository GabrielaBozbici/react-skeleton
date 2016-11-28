import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
render(){
  var divStyle = {
    backgroundColor: "#3E51B5",
    height:200,
    color: 'white'
  }
  // var textStyle = {
  //   color: 'white'
  // }
  return(
    <div className="fluid-container header" style={divStyle}>
      <div className="container">
        <div className="row">
          <div  className="col-sm-6 col-xs-12">
            <h1 >Country News</h1>
            <h5 >Top stories in my country</h5>
          </div>

          <div className="col-sm-6 col-xs-12">
            <div className="row">
              <div className="col-sm-12 clearfix">
                <div className="icon-menu pull-right">
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-instagram"></i>
                  <i className="fa fa-linkedin"></i>
                  <i className="fa fa-envelope"></i>
                </div>
              </div>
              <div className="col-sm-12 clearfix">
                <div className="menu pull-right">
                  <Link to="/page1">PHOTOS</Link>
                  <Link to="/page2">NEWS</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
};
