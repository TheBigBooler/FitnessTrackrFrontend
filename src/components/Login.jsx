import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const Login = () => {
    const { setIsLoggedIn, setUser } = useOutletContext();
    const { setToken } = useOutletContext();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //reroute user after loggin in
    const navigate = useNavigate();

    const login = async () => {
      try {
        const response = await fetch(`${API_URL}users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              username: username,
              password: password
          }),
        });
        const result = await response.json();
        console.log(result);
        if (result.user) {
          setIsLoggedIn(true);
          setToken(result.token);
          localStorage.setItem("token",result.token);
          setUser(result.user.username);
          navigate("/");
        } else {
          alert("Invalid username or password: please try again");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setUsername("");
        setPassword("");
      }
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      login();
    };



  return (
    <div className="text-center flex-col border-red-200 bg-indigo-200 border-4 rounded">
      <h2 className="text-blue-400 text-2xl font-bold m-5">
        Sign in to get fit!
      </h2>
      <form className="flex-col" onSubmit={handleSubmit}>
        <div className="font-bold">
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            type="text"
            className="text-black ml-2"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            minLength="4"
            maxLength="15"
            required
          />
        </div>
        <div className="m-4 font-bold">
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            className="text-black ml-2"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength="8"
            maxLength="15"
            required
          />
        </div>
        <button
          type="submit"
          className="m-4 border-red-200 bg-indigo-200 border-2 rounded text-blue-400 font-bold p-1"
        >
          Login
        </button>
      </form>
      <p>
        Just now starting your fitness journey?{" "}
        <Link to="/register" className="underline">
          Register here!
        </Link>
      </p>
    </div>
  );
};

export default Login;
