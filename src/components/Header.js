import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import {
  PATH_REGISTER,
  PATH_LAMP_LIST,
  PATH_ROOT,
  PATH_CART
} from './constants/index';

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md fixed-top shadow-sm bg-white navbar-light rounded"
        id="main-nav"
      >
        <div className="container">
          <h6 className="float-right mt-3" id="heading">
            <NavLink
              className="text-black"
              to={PATH_LAMP_LIST}
              activeClassName="active"
            >
              <img src={logo} alt="logo" className="img fluid" />
              <strong>Starter Store</strong>
            </NavLink>
          </h6>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            type="button"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="text-black"
                  to={PATH_REGISTER}
                  activeClassName="active"
                >
                  Sign up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="text-black"
                  exact
                  to={PATH_ROOT}
                  activeClassName="active"
                >
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="text-black"
                  to={PATH_CART}
                  activeClassName="active"
                >
                  <i className="fas fa-shopping-cart" />
                  &nbsp;Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
