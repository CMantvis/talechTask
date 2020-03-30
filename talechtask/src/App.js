import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductProvider } from "./ProductContext";
import ProductsList from "./components/ProductsList";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AddProduct from "./components/AddProduct";
import ProductView from "./components/ProductView";
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <NavBar />
      <ProductProvider>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductsList} />
            <Route exact path="/products/create" component={AddProduct} />
            <Route exact strict path="/products/:slug" component={ProductView} />
            <Route exact strict path="/products/:slug/edit" component={EditProduct} />
          </Switch>
        </div>
      </ProductProvider>
    </Router>
  );
}

export default App;
