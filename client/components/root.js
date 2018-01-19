import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';

export default function Main () {

      return (
        <Router>
          <div id="main" className="container-fluid">
            <div className="col-xs-10">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
      </Router>
      );
}
