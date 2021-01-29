import React, { useContext } from "react";

import { UserContext } from "contexts/userContext";
import { usePostFetch } from "customHooks/usePostFetch"


const Homepage = () => {
  const { providedUser } = useContext(UserContext);
  const [res, sendRequest] = usePostFetch();

  const handleSignOut = () => {

    sendRequest("/sign-out", {});
    providedUser.setUser({});
    localStorage.clear();
    console.log(res);
  };

  return (
    <> 
      <h1>Homepage</h1>
      {providedUser.user.email ? 
        <button onClick={handleSignOut}>Sign Out</button> 
      :
        null
      }
    </>
  )
}

export default Homepage;