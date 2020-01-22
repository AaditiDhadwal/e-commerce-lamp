import React from 'react';

const Footer = () => {
  return (
    <section id="main-footer">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <p>
              <strong>About</strong>
              <br />
            </p>
            <span className="text-primary">Privacy</span>
            <br />
            <span className="text-primary">Terms</span>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Services</strong>
              <br />
            </p>
            <span className="text-primary">Our product</span>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Social Services</strong>
              <br />
            </p>
            <i className="fab fa-twitter">
              {' '}
              <span className="text-primary pr-2">Twitter</span>
            </i>
            <i className="fab fa-facebook">
              {' '}
              <span className="text-primary pr-2">Facebook</span>
            </i>
            <i className="fas fa-envelope">
              {' '}
              <span className="text-primary font-weight-light">Email</span>
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
