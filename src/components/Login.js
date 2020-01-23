/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Login = () => {
  return (
    <section id="account">
      <div className="container pb-4">
        <h1>Create an account</h1>

        <form className="border rounded p-3">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-default" type="submit">
            Login
          </button>
        </form>
      </div>
      <hr />
    </section>
  );
};

export default Login;
