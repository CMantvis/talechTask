import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ProductProvider} from "./ProductContext";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <ProductProvider>
      <div className="container">
        <ProductsList />
      </div>
    </ProductProvider>
  );
}

export default App;
