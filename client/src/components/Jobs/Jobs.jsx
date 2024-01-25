/* eslint-disable react/prop-types */
import JobsCard from "./JobsCard";

const Jobs = ({ jobs }) => {
  return (
    <>
      {jobs.map((job, index) => (
        <JobsCard key={index} data={job} />
      ))}
    </>
  );
};

export default Jobs;
