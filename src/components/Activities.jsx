import React, {useState, useEffect} from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import {createActivity, fetcActivities } from "../api";



const Activities = () => {
  const [activities, setActivities] = useState([]);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username");

  useEffect(() => {
    const getActivities = async () => {
      try {
        const response = await fetcActivities();
         const sortedActivities = response.sort((a, b) => a.id - b.id);
        setActivities(sortedActivities);
        } catch (error) {
        console.error(error);
        throw error;
      }
    };
    getActivities();
  }, []);

  return (
    <div className="activities-container">
      <Link
        to="createActivity"
        className="flex justify-center pt-4 text-pink-600 hover:underline "
      >
         Create a New Activity
      </Link>
      <h1 className="text-center text-4xl  pb-7 text-white">Activities</h1>
      {activities &&
        activities.map((activity) => (
          <div className="" key={activity.id}>
            <div className="bg-red-200 text-center p-5 m-7 rounded-lg">
              ID: {activity.id}
            </div>
            <div className="text-center ">Exercise type: {activity.name}</div>
            <div className="text-center ">
              Description: {activity.description}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Activities;