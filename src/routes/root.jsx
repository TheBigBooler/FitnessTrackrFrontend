import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";


const Root = () => {
    return (
      <>
      <NavBar/>
        <div>
          <Outlet />
        </div>
      </>
    );
}

export default Root;