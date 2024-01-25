/* eslint-disable react/prop-types */
import React from "react";

const SalaryType = ({ salaryType, setSalaryType }) => {
  return (
    <select value={salaryType} onChange={(e) => setSalaryType(e.target.value)}>
      <option selected disabled hidden>
        Salary
      </option>
      <option>Monthly</option>
      <option>Yearly</option>
    </select>
  );
};

export default SalaryType;
