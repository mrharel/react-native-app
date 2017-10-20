import { combineReducers } from 'redux';
import appReducer from './app.reducer';
import githubReducer from './github.reducer';

export default () => combineReducers({
  app: appReducer,
  github: githubReducer,
});