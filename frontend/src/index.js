import { composeWithDevTools } from "redux-devtools-extension";
import { projectsReducer } from "./redux/projectsReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

const store = createStore(projectsReducer, composeWithDevTools());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
