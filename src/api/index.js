const API_URL = "https://fitnesstrac-kr.herokuapp.com/api";

  


export async function fetcActivities() {
  try {
    const response = await fetch(`${API_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}



export async function createActivity( name, description) {
    const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${API_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}



export const updateActivity = async (
  { name, description },
  activityId
) => {
    const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${API_URL}/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log("error, unable to update activity");
  }
};

