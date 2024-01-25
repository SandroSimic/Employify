import axios from "axios";
import { BASE_URL } from "../utils/constants";

const jobUrl = `${BASE_URL}/jobs`;

export const getJobs = async (params) => {
  const { data } = await axios.get(jobUrl, { withCredentials: true, params });
  return data;
};

export const getJob = async (jobId) => {
  const { data } = await axios.get(`${jobUrl}/${jobId}`);
  return data;
};

export const getTopJobs = async () => {
  const { data } = await axios.get(`${jobUrl}/top-jobs`);
  return data;
};
