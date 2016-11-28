import React, { Component } from 'react';
import { Router, Route, browserHistory} from 'react-router';
import Base from './components/Base';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

 class Routes extends Component {
    render(){
      return(
        <Router history={browserHistory}>
          <Route path="/" component={Base}>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
          </Route>
        </Router>
      )
    }


}

export default Routes;
