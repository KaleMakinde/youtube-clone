import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import {Provider} from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";

import "./_base.scss"
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
    
  </React.StrictMode>
, document.getElementById('root'))

// ReactDOM.render(
// <Provider store={store}>
// <App/>
// </Provider>
// , document.getElementById('root'))