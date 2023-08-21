import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import App from "./App";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import store from "./store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="/" index={true} element={<HomeScreen></HomeScreen>}></Route>
          <Route path="/product/:id" element={<ProductScreen></ProductScreen>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
