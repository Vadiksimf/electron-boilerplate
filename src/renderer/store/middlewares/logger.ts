import { Middleware } from 'redux';
import { appendLog } from '../logs/reducer';

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  // For dev purposes
  console.log('Action', action);

  if (!action.logged && action.payload?.statusInfo) {
    action.payload.statusInfo.logged = true;
    store.dispatch(appendLog(action.payload.statusInfo));
  }
  return next(action);
};

export default loggerMiddleware;
