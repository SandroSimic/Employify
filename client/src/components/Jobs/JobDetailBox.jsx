import React from "react";

// eslint-disable-next-line react/prop-types
const JobDetailBox = ({ icon, jobType, jobTypeDesc }) => {
  return (
    <div className="jobDetails__main__info__condition__box">
      <span>{icon}</span>
      <div className="jobDetails__main__info__condition__box__text">
        <h3>{jobType}</h3>
        <p>{jobTypeDesc}</p>
      </div>
    </div>
  );
};

export default JobDetailBox;
