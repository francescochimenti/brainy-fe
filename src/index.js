import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "animate.css";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import postReducer from "./reducers/postReducer";
import likeReducer from "./reducers/likeReducer";

//This reducer is responsible for combining all the reducers of the application
const reducer = combineReducers({
  login: loginReducer,
  posts: postReducer,
  likes: likeReducer,
});

//This is the store of the application
const store = configureStore({
  reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
