/* eslint-disable react/prop-types */
import React from "react";

const ExperienceLevel = ({ setExperience, experience }) => {
  return (
    <select onChange={(e) => setExperience(e.target.value)} value={experience}>
      <option disabled hidden selected>
        Experience Level
      </option>
      <option>Entry Level</option>
      <option>Mid Level</option>
      <option>Senior Level</option>
    </select>
  );
};

export default ExperienceLevel;
