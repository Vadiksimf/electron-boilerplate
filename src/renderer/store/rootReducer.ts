import { combineReducers } from 'redux';

// eslint-disable-next-line import/no-named-as-default
import filesSlice from './files/reducer';
import logsSlice from './logs/reducer';

export default combineReducers({
  files: filesSlice,
  logs: logsSlice,
});
