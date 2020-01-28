import React from 'react';
import Loader from 'react-loader-spinner';

export default function PageLoader() {
  return (
    <Loader
      type="Bars"
      color="#f2711c"
      height={100}
      width={100}
      className="pageLoader"
    />
  );
}
