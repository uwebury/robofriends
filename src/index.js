import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "./index.css";
import App from "./containers/App";
import { searchRobots } from "./reducers";
import "tachyons";

const rootReducer = combineReducers({ searchRobots });
const store = createStore(rootReducer);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
