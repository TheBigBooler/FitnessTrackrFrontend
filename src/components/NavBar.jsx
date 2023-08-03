import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar p-4 flex justify-between items-center mx-auto border-b border-red-200 bg-indigo-200 rounded m-2 ">
      <h1 className="text-blue-400 text-2xl font-bold">Fitness Tracker</h1>
      <div className="links">
        <Link
          to="/"
          className="no-underline p-4 hover:text-red-500 hover:font-bold"
        >
          Home
        </Link>
        <Link to="/Routines" className=" p-4 hover:text-red-500">
          Routines
        </Link>

        <Link to="/MyRoutines" className=" p-4 hover:text-red-500">
          MyRoutines
        </Link>
        <Link to="/Activities" className=" p-4 hover:text-red-500">
          Activities
        </Link>
        <Link to="/Login" className=" p-4 hover:text-red-500">
          Login/Register
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
