import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useUpdateJob } from "../components/Jobs/useUpdateJob";
import { useForm, Controller } from "react-hook-form";
import { useJob } from "../components/Jobs/useJob";
import Spinner from "../components/UI/Spinner";
import { useParams } from "react-router-dom";
const UpdateJobPage = () => {
  const { data: job, isLoading } = useJob();
  const { jobId } = useParams();
  console.log(jobId);

  console.log(job);
  const [value, setValue] = useState("");
  const { updateJobQuery, isLoading: isUpdating } = useUpdateJob();
  const { handleSubmit, register, getValues, control } = useForm();

  useEffect(() => {
    if (job?.description) {
      setValue(job?.description);
    }
  }, [job?.description]);

  const onSubmit = async () => {
    const formData = getValues();
    try {
      console.log(formData);
      await updateJobQuery({ jobData: formData, jobId });
    } catch (error) {
      console.log(error);
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <section className="addJob">
      {isLoading ? (
        <Spinner />
      ) : (
        <form
          className="addJob__form"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <h2>Update Job</h2>
          <div>
            <label htmlFor="position">Position:</label>
            <input
              {...register("position")}
              type="text"
              id="position"
              name="position"
              defaultValue={job?.position}
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
              defaultValue={job?.location}
              required
            />
          </div>
          <div>
            <label htmlFor="jobType">Job Type:</label>
            <select
              id="jobType"
              name="jobType"
              {...register("jobType")}
              defaultValue={job?.jobType}
            >
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
              defaultValue={job?.salary}
              required
            />
          </div>
          <div>
            <label htmlFor="salaryType">Salary Type:</label>
            <select
              id="salaryType"
              name="salaryType"
              {...register("salaryType")}
              defaultValue={job?.salaryType}
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
              defaultValue={job?.category}
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
              defaultValue={job?.experience}
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
              defaultValue={job?.description}
              render={({ field }) => (
                <ReactQuill
                  className="quill"
                  theme="snow"
                  value={value}
                  defaultValue={job?.description}
                  onChange={(val) => {
                    setValue(val);
                    field.onChange(val);
                  }}
                />
              )}
            />
          </div>
          <button
            type="submit"
            className="addJob__form__btn"
            disabled={isUpdating}
          >
            Update Job
          </button>
        </form>
      )}
    </section>
  );
};

export default UpdateJobPage;
