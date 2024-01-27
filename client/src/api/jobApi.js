import axios from "axios";
import { BASE_URL } from "../utils/constants";

const jobUrl = `${BASE_URL}/jobs`;

export const getJobs = async (params) => {
  const { data } = await axios.get(`${jobUrl}?limit=9`, {
    withCredentials: true,
    params,
  });
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

export const createJob = async (jobData) => {
  const { data } = await axios.post(jobUrl, jobData, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return data;
};

export const deleteJob = async (jobId) => {
  await axios.delete(`${jobUrl}/${jobId}`, {
    withCredentials: true,
  });
};

export const updateJob = async (jobData, jobId) => {
  await axios.patch(`${jobUrl}/${jobId}`, jobData, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
