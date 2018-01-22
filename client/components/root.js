import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';
import SinglePlace from './singlePlace';
import Login from './login';
import Signup from './signup';
import Navbar from './navbar';
import Footer from './footer';

export default function Main () {

      return (
        <Router>
          <div id="main" className="container-fluid">
            <div className="col-xs-10">
            <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
			          <Route path="/signup" component={Signup} />
                <Route path="/:placeId" component={SinglePlace} />
              </Switch>
            </div>
          </div>
      </Router>
      );
}
