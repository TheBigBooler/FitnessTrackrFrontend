import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";

const Home = () => {
  const { user } = useOutletContext()
    return (
      <>
        <h1>hi there, {user}</h1>
        <p>Setting up basic scaffolding</p>
      </>
    );
}

export default Home;