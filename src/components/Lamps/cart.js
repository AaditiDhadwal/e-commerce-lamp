/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

import PageLoader from '../../common/PageLoader';

export default function Cart() {
  const [isLoading, setIsLoading] = useState(null);
  const [cartDetails, setCartDetails] = useState(null);

  function totalLamps() {
    const add = [];
    if (cartDetails && cartDetails.length) {
      cartDetails.forEach(element => {
        const total = element.detail.lamp_price * element.quantity;
        add.push(total);
      });
    }
    return add.reduce((a, b) => a + b, 0);
  }

  useEffect(() => {
    setIsLoading(true);
    setCartDetails(JSON.parse(localStorage.getItem('cart')));
    setIsLoading(false);
  }, [setIsLoading]);

  function deleteLamp(id) {
    const cart = cartDetails.filter(item => {
      return item.detail.id !== id;
    });
    setCartDetails(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function generateCart() {
    const items = [];
    if (cartDetails === null || (cartDetails && cartDetails.length === 0)) {
      return (
        <div className="alert alert-warning border border-warning" role="alert">
          <h4 className="alert-heading">Your cart is empty!</h4>
          <p className="mb-0">
            You will need to add some items to the cart before you can checkout.
          </p>
        </div>
      );
    }
    for (const item of cartDetails) {
      items.push(
        <div className="card border-0" key={item.detail.sku}>
          <div className="card-body">
            <img
              src={process.env.REACT_APP_BASE_URL + item.detail.lamp_img[0].url}
              alt="lamp"
              className="img-fluid bg-grey"
            />
            <div className="manage-card">
              <h3>{item.detail.lamp_name}</h3>
              <p className="mb-0 float-right"> x {item.quantity}</p>
              <p className="mb-0">$ {item.detail.lamp_price}.00</p>
              <small className="badge bg-grey mb-5">
                SKU: {item.detail.sku}
              </small>
            </div>
            <button
              className="btn btn-default border rounded py-2 px-3 float-right"
              type="button"
              onClick={() => {
                deleteLamp(item.detail.id);
              }}
            >
              <strong>
                <i className="fas fa-times" />
              </strong>
            </button>
          </div>
        </div>
      );
    }
    return items;
  }

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <div className="container my-5" id="cart">
            <div className="row pt-5">
              <div className="col">
                {generateCart()}
                <hr />
                {cartDetails === null ||
                (cartDetails && cartDetails.length === 0) ? (
                  ''
                ) : (
                  <div className="p-3 border rounded">
                    <p>
                      <strong>Sub total:</strong> $ {totalLamps()}
                      .00
                      <button
                        className="btn btn-dark float-right"
                        type="submit"
                      >
                        Checkout
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
