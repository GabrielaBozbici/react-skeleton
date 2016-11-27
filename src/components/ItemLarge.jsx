import React, { Component } from 'react';

export default class ItemLarge extends Component {

  render(){
    var divStyle = {
      // marginTop: 10
    };
    var bgColor = {

    };
    if(this.props.bodyColor){
      bgColor.backgroundColor = this.props.bodyColor;
    }

    return (
      <div style={divStyle}>
        <div className="panel panel-default">
          <div className="panel-body large" style={bgColor}>

          </div>
          <div className="panel-footer">
            <div className="row">
              <div className="col-sm-4 col-xs-4">
                <div className="top">15080</div>
                <div className="bottom">Shot Views</div>
              </div>
              <div className="col-sm-4 col-xs-4">
                <div className="top">12000</div>
                <div className="bottom">Likes</div>
              </div>
              <div className="col-sm-4 col-xs-4">
                <div className="top">5100</div>
                <div className="bottom">Comments</div>
              </div>
            </div>
          </div>
         </div>
      </div>
    );
  }
};
