import React, { useState, useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import NewRoutineForm from "./NewRoutineForm";
import AddActivityForm from "./AddActivityForm";

const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const RoutinesByUser = () => {
  const { token, user } = useOutletContext();
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [updatedActivity, setUpdatedActivity] = useState({});
  
  
  useEffect(() => {
    getRoutinesByUser();
    getActivities();
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

  const getActivities = async () => {
    try {
      const request = await fetch(`${API_URL}activities`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const result = await request.json();
      result.sort((a, b) => {
        const activityA = a.name.toUpperCase();
        const activityB = b.name.toUpperCase();
        if (activityA < activityB) {
          return -1
        }
        if (activityA >= activityB) {
          return 1
        }
      })
      console.log(result);
      setActivities(result);

    } catch (error) {
      console.error(error)
      throw error
    }
  }


  return (
    <>
      <NewRoutineForm token={token} getRoutinesByUser={getRoutinesByUser}/>
      <h1 className="text-center text-2xl mt-8">My routines</h1>
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
              <AddActivityForm
                activities={activities}
                routine={routine}
                getRoutinesByUser={getRoutinesByUser}
              />
              {/* <form
                onSubmit={() => {
                  console.log(addActivity);
                }}
              >
                <label htmlFor="activity-select" className="m-1">
                  Add activity:
                </label>
                <select name="activities">
                  <option value="">choose an activity</option>
                  {activities.map((activity) => {
                    return (
                      <option value={activity.name} key={activity.id}>
                        {activity.name}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="count" className="m-1">
                  Count:
                </label>
                <input
                  className="w-12"
                  type="text"
                  value={newRoutine.goal}
                  onChange={handleChange}
                ></input>
                <label htmlFor="duration" className="m-1">
                  Duration:
                </label>
                <input className="w-12"></input>
                <button
                  type="submit"
                  className="m-1 border-red-200 bg-indigo-200 rounded ml-4 underline"
                >
                  add to {routine.name}
                </button>
              </form> */}
            </div>
          );
        }
      })}
    </>
  );
};

export default RoutinesByUser;