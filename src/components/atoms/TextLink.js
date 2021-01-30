import React from "react";

import { Link } from "react-router-dom";

const TextLink = ({ children, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "#000000" }} >
      { children }
    </Link>
  )
}

export default TextLink;