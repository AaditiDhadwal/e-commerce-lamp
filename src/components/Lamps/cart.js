import React from 'react';

import lamp1 from '../../assets/images/lamp1.png';

const Cart = () => {
  return (
    <>
      <div className="container my-5" id="cart">
        <div className="row pt-5">
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <img src={lamp1} alt="" className="img-fluid bg-grey" />
                <div className="manage-card">
                  <h3>Gold</h3>
                  <p className="mb-0">$234.00</p>
                  <small className="badge bg-grey mb-5">SKU: BXD100BLK</small>
                </div>
                <span className="border rounded py-2 px-3 float-right">
                  <strong>
                    <i className="fas fa-times" />
                  </strong>
                </span>
              </div>
            </div>
            {/* is cart empty UI starts */}
            {/* <div
              className="alert alert-warning border border-warning"
              role="alert"
            >
              <h4 className="alert-heading">Your cart is empty!</h4>
              <p className="mb-0">
                You will need to add some items to the cart before you can
                checkout.
              </p>
            </div> */}
            {/* is cart empty UI ends */}
            <hr />
            <div className="p-3 border rounded">
              <p>
                <strong>Sub total:</strong> $234.00
                <button className="btn btn-dark float-right" type="submit">
                  Checkout
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
