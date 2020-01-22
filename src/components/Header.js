import React from 'react';

import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm fixed-top shadow-sm bg-white rounded"
        id="main-nav"
      >
        <div className="container">
          <img src={logo} alt="logo" className="img fluid" />
          <h6 className="float-right mt-3">
            <strong>Starter Store</strong>
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
              <li className="nav-item active">
                <span className="nav-link text-black">Sign up</span>
              </li>
              <li className="nav-item">
                <a href="#explore-head-section" className="nav-link text-black">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a href="#create-head-section" className="nav-link text-black">
                  <i className="fas fa-shopping-cart" />
                  &nbsp;Cart(0)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
