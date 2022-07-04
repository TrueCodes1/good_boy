import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// IMPORTING REDUX REDUCERS
import allReducers from './reducers';

// IMORTING REDUX ACTIONS
import { fetchShelters } from './actions/Shelters';

const root = ReactDOM.createRoot(document.getElementById('root'));

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(

  allReducers,
  composeEnhancers(applyMiddleware(thunk))

);

store.dispatch(fetchShelters());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
