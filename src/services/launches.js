const API_URL = 'https://api.spacexdata.com/v4';

export const getAllLaunches = async () => {
  let data;
  try {
    const response = await fetch(`${API_URL}/launches`);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const getLaunchById = async (id) => {
  let data;
  try {
    const response = await fetch(`${API_URL}/launches/${id}`);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const getLaunchpadById = async (id) => {
  let data;
  try {
    const response = await fetch(`${API_URL}/launchpads/${id}`);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const getRocketById = async (id) => {
  let data;
  try {
    const response = await fetch(`${API_URL}/rockets/${id}`);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const getCrewMemberById = async (id) => {
  let data;
  try {
    const response = await fetch(`${API_URL}/crew/${id}`);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};
