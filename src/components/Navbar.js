import React from "react";

import { Link }from "react-router-dom"

const Navbar = () => {

  return <div>
    <ul>
      <li>
        <Link to="/">
          Homepage
        </Link>
      </li>
      <li>
        <Link to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login">
          Login
        </Link>
      </li>
      <li>
        <Link to="/reset">
          Reset Password
        </Link>
      </li>
    </ul>
  </div>
    
}

export default Navbar;