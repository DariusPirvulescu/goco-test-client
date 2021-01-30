import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const LoadSpinner = ({ color, size }) => {
  return <CircularProgress color={color} size={size} />;
};

export default LoadSpinner;
