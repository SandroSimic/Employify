import axios from "axios";
import { BASE_URL } from "../utils/constants";

const companyApi = `${BASE_URL}/companies`;

export const createCompany = async (companyData) => {
  const { data } = await axios.post(companyApi, companyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });

  return data;
};
