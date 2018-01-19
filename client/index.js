import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Root from './components/root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// establishes socket connection
import './socket';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Root />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
