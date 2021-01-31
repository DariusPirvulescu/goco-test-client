import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const TextLink = ({ children, to, hash, ...rest }) => {

  if(hash) {
    return (
      <HashLink to={to} {...rest} style={{ textDecoration: 'none', color: '#000000' }} >
        { children }
      </HashLink>
    )
  }

  return (
    <Link to={to} {...rest} style={{ textDecoration: 'none', color: '#000000' }} >
      { children }
    </Link>
  )
}

export default TextLink;