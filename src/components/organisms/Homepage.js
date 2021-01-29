import React, { useContext } from "react";

import { UserContext } from "contexts/userContext";
import { usePostFetch } from "customHooks/usePostFetch"

import Header from "components/molecules/Header";

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
      
      <Header /> 

      {providedUser.user && providedUser.user.email ? 
        <button onClick={handleSignOut}>Sign Out</button> 
      :
        null
      }
    </>
  )
}

export default Homepage;