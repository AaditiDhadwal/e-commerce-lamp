/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import lampLogo from '../../assets/images/lamp.svg';

import { getLampList } from '../Api/LampApi';
import PageLoader from '../../common/PageLoader';
import { PATH_LAMP_DETAILS } from '../../constants';

export default function List() {
  const history = useHistory();
  const [isListLoading, setIsListLoading] = useState(null);
  const [listData, setlistData] = useState({});

  const getListData = () => {
    setIsListLoading(true);
    getLampList().then(data => {
      setlistData(data);
      setIsListLoading(false);
    });
  };

  useEffect(() => {
    if (isListLoading === null) {
      getListData();
    }
  }, [isListLoading, listData]);

  function generateHTML() {
    const evenSection = [];
    const oddSection = [];
    if (listData && listData.length) {
      for (const field of listData) {
        if (field.id % 2) {
          oddSection.push(field);
        } else {
          evenSection.push(field);
        }
      }
    }
    return (
      <div className="row mb-5">
        {oddSection.map(field => (
          <div className="col-md-6 mb-4" key={field.id}>
            <div
              className="card shadow-sm bg-white rounded"
              onClick={() =>
                history.push(PATH_LAMP_DETAILS.replace(':id', field.id))
              }
            >
              <div className="card-header text-center">
                <img
                  src={process.env.REACT_APP_BASE_URL + field.lamp_img[0].url}
                  alt="lamp"
                  className="img-fluid"
                />
              </div>
              <div className="card-body px-2 py-1">
                <h5>
                  <strong>{field.lamp_name}</strong>
                </h5>{' '}
                <p>${field.lamp_price}.00</p>
              </div>
            </div>
          </div>
        ))}
        {evenSection.map(field => (
          <div className="col-md-6 mb-4" key={field.id}>
            <div
              className="card shadow-sm bg-white rounded"
              onClick={() =>
                history.push(PATH_LAMP_DETAILS.replace(':id', field.id))
              }
            >
              <div className="card-header text-center">
                <img
                  src={process.env.REACT_APP_BASE_URL + field.lamp_img[0].url}
                  alt="lamp"
                  className="img-fluid"
                />
              </div>
              <div className="card-body px-2 py-1">
                <h5>
                  <strong>{field.lamp_name}</strong>
                </h5>{' '}
                <p>${field.lamp_price}.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {isListLoading ? (
        <PageLoader />
      ) : (
        <>
          <div className="container mb-5" id="lamp">
            <img
              src={lampLogo}
              alt="lamp"
              className="m-5 pt-5 img-fluid"
              id="logo"
            />
            {generateHTML()}
          </div>
          <hr />
        </>
      )}
    </>
  );
}
