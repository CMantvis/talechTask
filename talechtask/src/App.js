import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductProvider } from "./ProductContext";
import ProductsList from "./components/ProductsList";
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import AddProduct from "./components/AddProduct"
import ProductView from "./components/ProductView"
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <NavBar />
      <ProductProvider>
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" exact component={ProductsList} />
            <Route path="/products/create" exact component={AddProduct} />
            <Route path="/products/:EAN" exact component={ProductView}/>
            <Route path="products/:EAN/edit" component={EditProduct} />
          </Switch>
        </div>
      </ProductProvider>
    </Router>
  );
}

export default App;
