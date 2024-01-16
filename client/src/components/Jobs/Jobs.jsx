/* eslint-disable react/prop-types */
import JobsCard from "./JobsCard";

const Jobs = ({ jobs }) => {
console.log(jobs)

  return (
    <>
      {jobs.map((job, index) => (
        <JobsCard
          key={index}
          id={job._id}
          CompanyName={job.CompanyName || "Company Name"}
          position={job.position}
          location={job.location}
          salary={job.salary}
          monthly={job.monthly}
          fullTime={job.fullTime}
          dateOfPost={job.createdAt}
          description={job.description}
          applied={job.applicants}
        />
      ))}
    </>
  );
};

export default Jobs;
