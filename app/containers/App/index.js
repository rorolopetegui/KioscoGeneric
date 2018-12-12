/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import ProductList from 'containers/ProductList/Loadable';
import Checkout from 'containers/Checkout/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import GlobalStyle from '../../global-styles';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={ProductList} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
export default DragDropContext(HTML5Backend)(App);
