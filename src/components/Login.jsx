import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const Login = () => {
  return (
    <>
      <h1>Login Page:</h1>
      <p>This will be the Login page</p>
    </>
  );
};

export default Login;
