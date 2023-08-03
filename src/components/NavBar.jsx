import React from "react";
import {  NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <nav className="navbar p-4 flex justify-between items-center mx-auto border-4 border-red-200 bg-indigo-200 rounded m-2 ">
      <h1 className="text-blue-400 text-2xl font-bold">Fitness Tracker</h1>
      <div>
        <NavLink
          to={"/"}
          className="no-underline p-4 hover:text-red-500 hover:font-bold"
        >
          Home
        </NavLink>
        <NavLink to={"/routines"} className=" p-4 hover:text-red-500">
          Routines
        </NavLink>

        <NavLink to={"/routines/:username"} className=" p-4 hover:text-red-500">
          MyRoutines
        </NavLink>
        <NavLink to={"/activities"} className=" p-4 hover:text-red-500">
          Activities
        </NavLink>
        <NavLink to={"/login"} className=" p-4 hover:text-red-500">
          Login/Register
        </NavLink>
      </div>
    </nav>
  );
};
export default Navigation;