const API_URL = 'https://api.spacexdata.com/v4';

export const getAllLaunches = async () => {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLaunchById = async id => {
  try {
    const response = await fetch(`${API_URL}/launches/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLaunchpadById = async id => {
  try {
    const response = await fetch(`${API_URL}/launchpads/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getRocketById = async id => {
  try {
    const response = await fetch(`${API_URL}/rockets/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCrewMemberById = async id => {
  try {
    const response = await fetch(`${API_URL}/crew/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};