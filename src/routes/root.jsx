import React, { useState } from "react";
import Navigation from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [user, setUser] = useState("");
     const [token, setToken] = useState("");
    return (
      <>
        <Navigation
        //props to be able to change login button to logout button, and clear user state
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setToken={setToken}
          setUser={setUser}
        />
        <div>
          <Outlet
          //props to be shared between outlet routes
            context={{
              isLoggedIn,
              setIsLoggedIn,
              user,
              setUser,
              token,
              setToken,
            }}
          />
        </div>
      </>
    );
}

export default Root;