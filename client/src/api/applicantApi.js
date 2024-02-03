import axios from "axios";
import { BASE_URL } from "../utils/constants";

const applicantUrl = `${BASE_URL}/applicant`;

export const getApplicants = async () => {
  const { data } = await axios.get(applicantUrl, {
    withCredentials: true,
  });

  return data;
};

export const getApplicantsForCompany = async () => {
  const { data } = await axios.get(
    `${applicantUrl}/applicants-for-user-company`,
    {
      withCredentials: true,
    }
  );

  return data;
};
