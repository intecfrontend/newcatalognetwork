import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";
import AllReducers from "./reducers/index";


const store = createStore(

    AllReducers,

    // Development only: Allows debugging in React Store browser extension
    process.env.NODE_ENV === "development" ?
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        : undefined
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider >,

);

reportWebVitals();





