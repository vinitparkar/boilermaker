import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from '../store/currentUser';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }

  renderLoginSignup() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
         <NavLink to="/signup" activeClassName="active">signup</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">login</NavLink>
        </li>
      </ul>
    );
  }

  renderLogout() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
        <button
          className="navbar-btn btn btn-default"
          onClick={this.props.logout}>
          logout
        </button>
        </li>
      </ul>
    );
  }

render() {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          {/* <NavLink className="navbar-brand" to="/"><img src="logo.png" /></NavLink> */}
        </div>
        <div className="collapse navbar-collapse">
          {/* {this.props.hasCurrentlyLoggedInUser &&
            <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/users" activeClassName="active">users</NavLink>
                </li>
              <li>
                <NavLink to="/stories" activeClassName="active">stories</NavLink>
              </li>
            </ul>
          } */}
          {
            this.props.hasCurrentlyLoggedInUser
            ? this.renderLogout()
            : this.renderLoginSignup()
          }
        </div>
      </div>
    </nav>
  );
 }
}

const mapState = (storeState) => ({
  hasCurrentlyLoggedInUser: storeState.currentUser.hasOwnProperty('id')
});

const mapDispatch = (dispatch, ownProps) => ({
  logout: () => {
    dispatch(logout());
    ownProps.history.push('/');
  }
});

export default withRouter(connect(mapState, mapDispatch)(Navbar));
