import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import {
  PATH_REGISTER,
  PATH_ROOT,
  PATH_LAMP_LIST,
  PATH_LAMP_DETAILS,
  PATH_CART
} from './constants/index';
import Header from './components/Header';
import Register from './components/Register';
import Footer from './components/Footer';
import Login from './components/Login';
import List from './components/Lamps/list';
import Details from './components/Lamps/details';
import Cart from './components/Lamps/cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={PATH_CART} component={Cart} />
          <Route path={PATH_LAMP_DETAILS} component={Details} />
          <Route path={PATH_LAMP_LIST} component={List} />
          <Route path={PATH_REGISTER} component={Register} />
          <Route path={PATH_ROOT} component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
