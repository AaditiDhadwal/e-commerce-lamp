/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { login } from './Api/LoginApi';

export default function Login() {
  return (
    <section id="account">
      <div className="container pb-4">
        <h1>Sign in</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .required('This field is required.')
              .email('Invalid email!'),
            password: Yup.string()
              .required('This field is required.')
              .min(8)
              .max(16)
          })}
          onSubmit={values => {
            login(values);
          }}
        >
          {({ touched, errors, handleSubmit, values }) => (
            <Form className="border rounded p-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>
              <button className="btn btn-default" type="submit">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <hr />
    </section>
  );
}
