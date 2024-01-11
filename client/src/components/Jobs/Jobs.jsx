/* eslint-disable react/prop-types */
import JobsCard from "./JobsCard";

const Jobs = ({ jobs }) => {
  return (
    <>
      {jobs.map((job, index) => (
        <JobsCard
          key={index}
          id={job.id}
          image={job.image}
          CompanyName={job.CompanyName}
          position={job.position}
          location={job.location}
          salary={job.salary}
          monthly={job.monthly}
          fullTime={job.fullTime}
          dateOfPost={job.dateOfPost}
          description={job.description}
          applied={job.applied}
        />
      ))}
    </>
  );
};

export default Jobs;
