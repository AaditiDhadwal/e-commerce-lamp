import React from 'react';

import lamp1 from '../../assets/images/lamp1.png';

const Details = () => {
  return (
    <>
      <div className="container my-5" id="lamp-details">
        <div className="row mt-5 pt-5">
          <div className="col-md-6">
            <img src={lamp1} alt="lamp" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3 className="pt-5">
              <strong>Gold</strong>
            </h3>
            <p className="mb-0">$234.00</p>
            <small className="badge badge-secondary">SKU: BXD100BLK</small>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          culpa distinctio consequuntur odit architecto maxime dolores nemo
          similique quasi accusamus quo laborum, reiciendis explicabo ad
          sapiente a dolorem iusto eum!
        </p>
        <hr />
        <table className="rounded table table-bordered table-responsive-sm">
          <thead className="bg-grey">
            <tr>
              <th colSpan="2">Attributes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Material</td>
              <td>Steel</td>
            </tr>
            <tr>
              <td>Max watt.</td>
              <td>50W</td>
            </tr>
            <tr>
              <td>Bulb qnty.</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Finish</td>
              <td>Gloss Black</td>
            </tr>
            <tr>
              <td>Fitting</td>
              <td>GU10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </>
  );
};

export default Details;
