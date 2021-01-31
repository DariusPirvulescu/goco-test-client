import React from 'react';

import ButtonLink from './ButtonLink';

const ActionButton = ({ style }) => {
  return (
    <ButtonLink
      to="/register"
      className={style}
      variant="contained"
      color="primary"
    >
      Sign Up
    </ButtonLink>
  );
};

export default ActionButton;
