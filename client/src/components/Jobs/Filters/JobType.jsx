import React from "react";

// eslint-disable-next-line react/prop-types
const JobType = ({jobType, setJobType}) => {
  return (
    <select onChange={(e) => setJobType(e.target.value)} value={jobType}>
      <option selected disabled hidden>
        Job Type
      </option>
      <option>Full-Time</option>
      <option>Part-Time</option>
      <option>Freelance</option>
    </select>
  );
};

export default JobType;
