import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const Routines = () => {
  const [routines, setRoutines] = useState([])
  
  useEffect(() => {
    getPublicRoutines()
    console.log("Routines:", routines);
  }, [])

  const getPublicRoutines = async () => {
    try {
      const request = await fetch(`${API_URL}routines`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await request.json()
      // return result
      setRoutines(result)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <h2>Routines Page:</h2>
      <div>
        {routines.length &&
        routines.map((routine) => {
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
                       - {activity.count}x {activity.name} <span>for {activity.duration} minutes</span>
                      </p>
                      <p className="ml-3 mb-2">{activity.description}</p>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Routines;