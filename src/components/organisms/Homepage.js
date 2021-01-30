import React, { useContext } from "react";

import { UserContext } from "contexts/userContext";
import { usePostFetch } from "customHooks/usePostFetch";

import Header from "components/molecules/Header";
import About from "components/molecules/About";
import Pricing from "components/molecules/Pricing";

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
    <div>
      <Header />
      <About />
      <Pricing />
      
      {providedUser.user && providedUser.user.email ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : null}
    </div>
      
  );
};

export default Homepage;
