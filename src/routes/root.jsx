import React from "react";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const Root = () => {
    return (
        <div>
        <Outlet />
        </div>
    )
}

export default Root;