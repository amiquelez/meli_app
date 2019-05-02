import React from 'react';
import { Route } from 'react-router-dom'; 
import './Layout.css';
import Header from '../../components/header/Header';
import Products from '../../components/products/Products';
import Product from '../../components/product/Product';

function Layout() {
  return (
    <React.Fragment>
      <Route path="/" component={Header} />
      <div className="container">
        <Route path="/items" component={Products} />
        <Route path="/items/:id" component={Product} />
      </div>
    </React.Fragment>
  );
}

export default Layout;
