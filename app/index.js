import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import AppRouter from './routes';
const initialState = {
  artist: {
    artistName: 'Please Search for your Favorite Artist',
    songs: []
  }
}

const store = configureStore(initialState);

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    )
  }
}

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Root />, rootElement
);
