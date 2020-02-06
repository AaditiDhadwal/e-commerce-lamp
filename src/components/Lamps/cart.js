/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import PageLoader from '../../common/PageLoader';

export default function Cart() {
  const [isLoading, setIsLoading] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const cart = [];
    if (history.location.state !== null) {
      if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify(history.location.state));
      } else {
        cart.push(JSON.parse(localStorage.getItem('cart')));
        cart.push(JSON.stringify(history.location.state));
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  }, [history.location.state]);
  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <div className="container my-5" id="cart">
            <div className="row pt-5">
              <div className="col">
                {history.location.state === null ? (
                  <div
                    className="alert alert-warning border border-warning"
                    role="alert"
                  >
                    <h4 className="alert-heading">Your cart is empty!</h4>
                    <p className="mb-0">
                      You will need to add some items to the cart before you can
                      checkout.
                    </p>
                  </div>
                ) : (
                  <div className="card border-0">
                    <div className="card-body">
                      <img
                        src={
                          process.env.REACT_APP_BASE_URL +
                          history.location.state.data.lamp_img[0].url
                        }
                        alt="lamp"
                        className="img-fluid bg-grey"
                      />
                      <div className="manage-card">
                        <h3>{history.location.state.data.lamp_name}</h3>
                        <p className="mb-0">
                          ${history.location.state.data.lamp_price}.00
                        </p>
                        <small className="badge bg-grey mb-5">
                          SKU: {history.location.state.data.sku}
                        </small>
                      </div>
                      <span className="border rounded py-2 px-3 float-right">
                        <strong>
                          <i className="fas fa-times" />
                        </strong>
                      </span>
                    </div>
                  </div>
                )}
                <hr />
                {history.location.state !== null ? (
                  <div className="p-3 border rounded">
                    <p>
                      <strong>Sub total:</strong> $234.00
                      <button
                        className="btn btn-dark float-right"
                        type="submit"
                      >
                        Checkout
                      </button>
                    </p>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
