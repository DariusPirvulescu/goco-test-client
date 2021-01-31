import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const LoadSpinner = ({ color, size, alignCenter }) => {
  return (
    <div
      style={
        alignCenter
          ? { textAlign: 'center', padding: '10px 0' }
          : { padding: '10px 0' }
      }
    >
      <CircularProgress color={color} size={size} />
    </div>
  );
};

export default LoadSpinner;
