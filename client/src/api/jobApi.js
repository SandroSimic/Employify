import axios from "axios";
import { BASE_URL } from "../utils/constants";

const jobUrl = `${BASE_URL}/jobs`;

export const getJobs = async () => {
  const { data } = await axios.get(jobUrl, { withCredentials: true });
  return data;
};

export const getJob = async (jobId) => {
  const { data } = await axios.get(`${jobUrl}/${jobId}`);
  return data;
};
