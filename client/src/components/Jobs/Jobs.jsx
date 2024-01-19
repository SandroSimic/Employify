/* eslint-disable react/prop-types */
import { calculateDaysAgo } from "../../utils/calculateTime";
import JobsCard from "./JobsCard";

const Jobs = ({ jobs }) => {

  return (
    <>
      {jobs.map((job, index) => (
        <JobsCard
          key={index}
          id={job._id}
          CompanyName={job.companyId.companyName}
          position={job.position}
          location={job.location}
          salary={job.salary}
          monthly={job.salaryType}
          fullTime={job.jobType}
          dateOfPost={calculateDaysAgo(job.createdAt)}
          description={job.description}
          applied={job.applicants}
          image={job.companyId.companyImage}
        />
      ))}
    </>
  );
};

export default Jobs;
