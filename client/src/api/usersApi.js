import axios from "axios";
import { BASE_URL } from "../utils/constants";

const usersApi = `${BASE_URL}/users`;

export const loginUser = async (userData) => {
  const { data } = await axios.post(`${usersApi}/login`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return data;
};

export const loggedInUser = async () => {
  const { data } = await axios.get(`${usersApi}/me`, {
    withCredentials: true,
  });

  if(!data) {
    throw new Error("Not Logged in")
  }

  return data.user;
};

export const registerUser = async (userData) => {
  const { data } = await axios.post(`${usersApi}/register`, userData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });

  return data;
};

export const logoutUser = async () => {
  await axios.post(`${BASE_URL}/users/logout`, null, {
    withCredentials: true,
  });
};
