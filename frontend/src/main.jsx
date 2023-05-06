import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import  {store}  from "./slices/store";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom"
import { Modal } from "./components/Modal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Modal /> 
    </BrowserRouter>
  </Provider>
);
