import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router';

import App from './containers/App/App';
import Home from './containers/Home/Home';

export default class AppRouter extends Component {
  render() {
    //Each Route below corresponds to a page
    return (
      <ReduxRouter>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
        </Route>
      </ReduxRouter>
    )
  }
}
