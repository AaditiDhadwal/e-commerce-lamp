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
            <span className="text-orange">Privacy</span>
            <br />
            <span className="text-orange">Terms</span>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Services</strong>
              <br />
            </p>
            <span className="text-orange">Our product</span>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Social Services</strong>
              <br />
            </p>
            <i className="fab fa-twitter">
              {' '}
              <span className="text-orange pl-2">Twitter</span>
            </i>
            <br />
            <i className="fab fa-facebook">
              {' '}
              <span className="text-orange pl-2">Facebook</span>
            </i>
            <br />
            <i className="fas fa-envelope">
              {' '}
              <span className="text-orange font-weight-light pl-2">Email</span>
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
