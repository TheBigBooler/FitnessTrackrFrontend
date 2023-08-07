import React, { useState, useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import NewRoutineForm from "./NewRoutineForm";

const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const RoutinesByUser = () => {
  const { token, user } = useOutletContext();
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [addActivity, setAddActivitiy] = useState({});
  const [updatedActivity, setUpdatedActivity] = useState({});
  
  useEffect(() => {
    getRoutinesByUser();
  }, [])

  const getRoutinesByUser = async () => {
    try {
      const request = await fetch(`${API_URL}users/${user}/routines`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await request.json();
      console.log(result)
      if (!user) {
        setRoutines([{message: "You aren't logged in!"}])
      }
      //user hasn't created any routines yet, set a message to display 
      else if (result.length === 0) {
      setRoutines([{message:"You don't have any routines yet!"}])
      } else {
        setRoutines(result)
      }
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <h1 className="text-center">My routines</h1>
      <NewRoutineForm token={token} getRoutinesByUser={getRoutinesByUser}/>
      {routines.map((routine, index) => {
        if (routine.message) {
          return (
          <p key={index} className="text-center">{routine.message}</p>)
        } else {
          return (
            <div
              key={routine.id}
              className="m-3 border-red-200 bg-indigo-200 rounded border-2"
            >
              <h3 className="text-2xl">{routine.name}</h3>
              <h4>
                {routine.goal} - created by {routine.creatorName}
              </h4>
              <p className="text-xl mt-2">Perform the following:</p>
              <div>
                {routine.activities.map((activity) => {
                  return (
                    <>
                      <p key={activity.id}>
                        - {activity.count}x {activity.name}{" "}
                        <span>for {activity.duration} minutes</span>
                      </p>
                      <p className="ml-3 mb-2">{activity.description}</p>
                    </>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default RoutinesByUser;