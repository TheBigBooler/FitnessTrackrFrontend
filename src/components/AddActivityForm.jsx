import React, {useState} from "react";

const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const AddActivityForm = ({ activities, routine, getRoutinesByUser }) => {
  const [addActivity, setAddActivity] = useState({
    activityId: "",
    count: "",
    duration: "",
  });

  const handleSubmitActivity = async (event) => {
    event.preventDefault();
    console.log(addActivity);
    try {
      const request = await fetch(
        `${API_URL}routines/${routine.id}/activities`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addActivity),
        }
      );
      const result = await request.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setAddActivity({
        activityId: "",
        count: "",
        duration: "",
      });
      getRoutinesByUser();
    }
  };

  return (
    <form onSubmit={handleSubmitActivity}>
      <label htmlFor="activity-select" className="m-1">
        Add activity:
      </label>
      <select
        name="activities"
        onChange={(e) => {
          setAddActivity((prevActivity) => ({
            ...prevActivity,
            activityId: e.target.value,
          }));
        }}
      >
        <option value="">choose an activity</option>
        {activities.map((activity) => {
          return (
            <option value={activity.id} key={activity.id}>
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
        value={addActivity.count}
        onChange={(e) => {
          setAddActivity((prevActivity) => ({
            ...prevActivity,
            count: e.target.value,
          }));
        }}
      ></input>
      <label htmlFor="duration" className="m-1">
        Duration:
      </label>
      <input
        className="w-12"
        type="text"
        value={addActivity.duration}
        onChange={(e) => {
          setAddActivity((prevActivity) => ({
            ...prevActivity,
            duration: e.target.value,
          }));
        }}
      ></input>
      <button
        type="submit"
        className="m-1 border-red-200 bg-indigo-200 rounded ml-4 underline"
      >
        add to {routine.name}
      </button>
    </form>
  );
};

export default AddActivityForm