import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAddJob } from "../components/Jobs/useAddJob";
import { useForm, Controller } from "react-hook-form";
const AddJobPage = () => {
  const [value, setValue] = useState("");
  const { createJobQuery, isLoading } = useAddJob();
  const { handleSubmit, register, getValues, control } = useForm();

  const onSubmit = async () => {
    const formData = getValues(); 
    try {
      await createJobQuery(formData);
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  const onError = (error) => {
    console.log(error);
  };
  return (
    <section className="addJob">
      <form className="addJob__form" onSubmit={handleSubmit(onSubmit, onError)}>
        <h2>Add a new job</h2>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            {...register("position")}
            type="text"
            id="position"
            name="position"
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            {...register("location")}
            type="text"
            id="location"
            name="location"
            required
          />
        </div>
        <div>
          <label htmlFor="jobType">Job Type:</label>
          <select id="jobType" name="jobType" {...register("jobType")}>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Freelance</option>
          </select>
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            {...register("salary")}
            required
          />
        </div>
        <div>
          <label htmlFor="salaryType">Salary Type:</label>
          <select
            id="salaryType"
            name="salaryType"
            {...register("salaryType")}
            required
          >
            <option>yearly</option>
            <option>monthly</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            {...register("category")}
            id="category"
            name="category"
            required
          >
            <option>Design & Development</option>
            <option>Marketing & Communication</option>
            <option>Digital Marketing</option>
            <option>Business & Consulting</option>
            <option>Finance Management</option>
            <option>Healthcare</option>
            <option>Fitness and Wellness</option>
            <option>Education</option>
            <option>Customer Service Care</option>
          </select>
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <select
            {...register("experience")}
            id="experience"
            name="experience"
            required
          >
            <option>Entry Level</option>
            <option>Mid Level</option>
            <option>Senior Level</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Job Description:</label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ReactQuill
                className="quill"
                theme="snow"
                value={value}
                onChange={(val) => {
                  setValue(val);
                  field.onChange(val);
                }}
              />
            )}
          />
        </div>
        <button type="submit" className="addJob__form__btn">
          Add Job
        </button>
      </form>
    </section>
  );
};

export default AddJobPage;
