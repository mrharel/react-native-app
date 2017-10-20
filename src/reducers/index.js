import { combineReducers } from 'redux';
import fileReducer from './files.reducer';

export default () => combineReducers({
  files: fileReducer,
});