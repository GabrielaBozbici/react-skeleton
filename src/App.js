import React, { Component } from 'react';
import Item from './components/Item.jsx';
import ItemLarge from './components/ItemLarge.jsx';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="fluid-container">
          <div className="container">
            <div className="col-sm-9">
              <div className="col-sm-4"><Item hasHeader={false} heading= '20' subheading='New followers added this month' /></div>
              <div className="col-sm-4"><Item hasHeader={false} heading='$ 1250' subheading='Average monthly income' /></div>
              <div className="col-sm-4"><Item hasHeader={false} heading='$ 13865' subheading='Yearly income goal' /></div>
              <div className="col-sm-12"><ItemLarge bodyColor='#0096D0' /></div>
              <div className="col-sm-12"><ItemLarge bodyColor='#CD59AE'/></div>
            </div>

            <div className="col-sm-3">
              <div className="col-sm-12"><Item hasHeader={false} bodyColor='#FF8A00' heading="18°" subheading='Paris' textColor='#fff' /></div>
              <div className="col-sm-12"><Item hasHeader={true} headerColor='#0096D0' head="New visitors" bottom='1.5k' /></div>
              <div className="col-sm-12"><Item hasHeader={true} headerColor='#B28AD6' head="Bounce Rates" bottom='50%' /></div>
              <div className="col-sm-12"><Item hasHeader={true} headerColor='#FF4826' head="Searchs" bottom='28%' /></div>
              <div className="col-sm-12"><Item hasHeader={true} headerColor='#63C254' head="Traffic" bottom='140.5 kb' /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
