import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <h1>React Application</h1>
      <hr />
      <div className="row">
        <div  className="col-sm-12">
          <Filter />
          <hr />
          <Products /></div>       
      </div>
    </div>
  </Provider>  
  );
}

export default App;
