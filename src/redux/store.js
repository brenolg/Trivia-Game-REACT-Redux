import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

if (window.Cypress) {
  window.store = store;
}

export default store;
