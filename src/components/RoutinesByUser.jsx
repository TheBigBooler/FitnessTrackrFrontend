import React, { useState, useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";

const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const RoutinesByUser = () => {
  const { token, user } = useOutletContext();
  const [routines, setRoutines] = useState([]);
  const [newRoutine, setNewRoutine] = useState({});
  
  useEffect(() => {
    getRoutinesByUser();
    console.log("Routines:", routines)
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
      //user hasn't created any routines yet, set a message to display 
      if (result.length === 0) {
      setRoutines([{message:"You don't have any routines yet! Let's make some!"}])
      } else {
        setRoutines(result)
      }
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <h1>RoutinesBy{user} Page:</h1>
      {routines.map((routine, index) => {
        if (routine.message) {
          return (
          <p key={index}>{routine.message}</p>)
        } else {
          return (
            <p key={routine.id}>{routine}</p>
          )
        }
      })}
    </>
  );
};

export default RoutinesByUser;