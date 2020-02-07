/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router';

import { getLampDetails } from '../Api/LampApi';
import PageLoader from '../../common/PageLoader';
import { PATH_CART } from '../../constants';

export default function Details() {
  const [isLoading, setIsLoading] = useState(null);
  const [detailData, setdetailData] = useState({});
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const history = useHistory();
  const { id } = useParams();
  let getQuantity = '';

  const getDetailData = useCallback(() => {
    setIsLoading(true);
    getLampDetails(id).then(data => {
      setdetailData(data);
      setIsLoading(false);
    });
  }, [id]);

  useEffect(() => {
    if (isLoading === null) {
      getDetailData(id);
    }
  }, [isLoading, detailData, getDetailData, id]);

  function generateAttributes() {
    const fields = [];
    for (const key in detailData.lamp_attributes) {
      // eslint-disable-next-line no-prototype-builtins
      if (detailData.lamp_attributes.hasOwnProperty(key)) {
        fields.push(
          <React.Fragment key={key}>
            <tr>
              <td className="text-capitalize">{key}</td>
              <td>{detailData.lamp_attributes[key]}</td>
            </tr>
          </React.Fragment>
        );
      }
    }
    return fields;
  }

  function getQntyDetails(event) {
    getQuantity = event.target.value;
  }

  function getLampQnty(data, qnty) {
    const prevCartDetails = cart;
    prevCartDetails.push({ detail: data, quantity: qnty });
    setCart(prevCartDetails);
    localStorage.setItem('cart', JSON.stringify(cart));
    history.push(PATH_CART);
  }

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <div className="container my-5" id="lamp-details">
            <div className="row mt-5 pt-5">
              <div className="col-md-6">
                <img
                  src={
                    process.env.REACT_APP_BASE_URL +
                    (detailData.lamp_img && detailData.lamp_img[0].url)
                  }
                  alt="lamp"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h3 className="pt-5">
                  <strong>{detailData.lamp_name}</strong>
                </h3>
                <p className="mb-0">${detailData.lamp_price}.00</p>
                <small className="badge badge-secondary">
                  SKU: {detailData.sku}
                </small>
                <div className="input-group my-3 w-100">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    onChange={event => getQntyDetails(event)}
                  />
                  <div
                    className="input-group-append"
                    onClick={() => getLampQnty(detailData, getQuantity)}
                  >
                    <span
                      className="input-group-text"
                      style={{ cursor: 'pointer' }}
                    >
                      <i className="fas fa-shopping-cart" /> &nbsp;Add to Cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h4>About this product</h4>
            <p>{detailData.lamp_description}</p>
            <hr />
            <table className="rounded table table-bordered table-responsive-xs">
              <thead className="bg-grey">
                <tr>
                  <th colSpan="2">Attributes</th>
                </tr>
              </thead>
              <tbody>{generateAttributes()}</tbody>
            </table>
          </div>
          <hr />
        </>
      )}
    </>
  );
}
