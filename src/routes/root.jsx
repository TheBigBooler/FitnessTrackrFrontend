import React from "react";
import Navigation from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";


const Root = () => {
    return (
      <>
      <Navigation/>
        <div>
          <Outlet />
        </div>
      </>
    );
}

export default Root;