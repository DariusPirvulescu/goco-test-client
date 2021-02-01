import React from 'react';

// import { makeStyles } from "@material-ui/core/styles"i
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const TextLink = ({ children, to, hash, variant, ...rest }) => {
  // const classes = useStyles();
  
  if (hash) {
    return (
      <HashLink to={to} {...rest} style={{ textDecoration: 'none', color: '#000000' }} >
        <Typography variant={variant} {...rest} >
          {children}
        </Typography>
      </HashLink>
    );
  }

  return (
    <Link to={to} {...rest} style={{ textDecoration: 'none', color: '#000000' }} >
      <Typography variant={variant} {...rest}>
        {children}
      </Typography>
    </Link>
  );
};

export default TextLink;
