import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import logo from '../assets/images/logo.svg';
import {
  PATH_REGISTER,
  PATH_LAMP_LIST,
  PATH_ROOT,
  PATH_CART
} from '../constants/index';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => (props.theme.mode === 'dark' ? '#111' : '#fff')};
  color: ${props => (props.theme.mode === 'dark' ? '#fff' : '#111')};
}
`;

export default function Header() {
  const [theme, setTheme] = useState({ mode: 'dark' });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <nav
          className={
            theme.mode === 'dark'
              ? 'navbar navbar-expand-md bg-black text-white shadow-sm navbar-dark rounded'
              : 'navbar navbar-expand-md bg-white text-white shadow-sm navbar-light rounded'
          }
          id="main-nav"
        >
          <div className="container">
            <h6 className="float-right mt-3" id="heading">
              <NavLink to={PATH_LAMP_LIST} activeClassName="active">
                <img src={logo} alt="logo" className="img fluid" />
                <strong className={theme.mode === 'dark' ? 'text-orange' : ''}>
                  Starter Store
                </strong>
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
                  <NavLink to={PATH_REGISTER} activeClassName="active">
                    <span
                      className={theme.mode === 'dark' ? 'text-orange' : ''}
                    >
                      Sign up
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to={PATH_ROOT} activeClassName="active">
                    <span
                      className={theme.mode === 'dark' ? 'text-orange' : ''}
                    >
                      Sign in
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={PATH_CART} activeClassName="active">
                    <i className="fas fa-shopping-cart" />
                    <span
                      className={theme.mode === 'dark' ? 'text-orange' : ''}
                    >
                      &nbsp;Cart (0)
                    </span>
                  </NavLink>
                </li>
              </ul>
              <label className="switch m-0" htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  onClick={() =>
                    setTheme(
                      theme.mode === 'dark'
                        ? { mode: 'light' }
                        : { mode: 'dark' }
                    )
                  }
                />
                <span className="slider round" />
              </label>
            </div>
          </div>
        </nav>
      </>
    </ThemeProvider>
  );
}
