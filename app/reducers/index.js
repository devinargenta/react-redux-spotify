import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import artist from './search';

const rootReducer = combineReducers({
  artist,
  router: routerStateReducer
});

export default rootReducer;
