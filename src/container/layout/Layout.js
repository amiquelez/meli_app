import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import './Layout.scss';
import Header from '../../components/header/Header';
import Products from '../../components/products/Products';
import Product from '../../components/product/Product';

function Layout() {
  return (
    <React.Fragment>
      <Route path="/" component={Header} />
      <div className="container">
        <Switch>
          <Route path="/items/:id" component={Product} />
          <Route path="/items" component={Products} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
