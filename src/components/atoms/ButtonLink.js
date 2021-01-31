import React from 'react';

import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function ButtonLink({ to, children, variant, color, style, ...rest }) {
  const history = useHistory();

  return (
    <Button
      onClick={() => history.push(to)}
      variant={variant}
      color={color}
      className={style}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default ButtonLink;
