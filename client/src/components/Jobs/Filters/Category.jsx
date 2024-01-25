import React from "react";

const Category = ({ category, setCategory }) => {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option selected disabled hidden>
        Category
      </option>
      <option>Design & Development</option>
      <option>Marketing & Communication</option>
      <option>Digital Marketing</option>
      <option>Customer Service Care</option>
      <option>Finance Management</option>
      <option>Business & Consulting</option>
      <option>Healthcare</option>
      <option>Education</option>
      <option>Fitness and Wellness</option>
    </select>
  );
};

export default Category;
