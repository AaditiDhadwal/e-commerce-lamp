/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getLampDetails } from '../Api/LampApi';
import PageLoader from '../../common/PageLoader';

export default function Details() {
  const [isLoading, setIsLoading] = useState(null);
  const [detailData, setdetailData] = useState({});
  const { id } = useParams();

  const getDetailData = () => {
    setIsLoading(true);
    getLampDetails(id).then(data => {
      setdetailData(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (isLoading === null) {
      getDetailData(id);
    }
    console.log(detailData, 'blah');
  }, [isLoading, detailData, id]);

  function generateAttributes() {
    const fields = [];
    for (const key in detailData.lamp_attributes) {
      // eslint-disable-next-line no-prototype-builtins
      if (detailData.lamp_attributes.hasOwnProperty(key)) {
        fields.push(
          <>
            <tr>
              <td className="text-capitalize">{key}</td>
              <td>{detailData.lamp_attributes[key]}</td>
            </tr>
          </>
        );
      }
    }
    return fields;
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
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-shopping-cart" /> &nbsp;Add to Cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h4>About this product</h4>
            <p>{detailData.lamp_description}</p>
            <hr />
            <table className="rounded table table-bordered table-responsive-sm">
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
