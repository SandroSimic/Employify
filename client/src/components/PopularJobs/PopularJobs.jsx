/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Heading from "../Heading";
import JobsCard from "../Jobs/JobsCard";
import { useTopJobs } from "../Jobs/useTopJobs";
import Spinner from "../Spinner";
import { calculateDaysAgo } from "../../utils/calculateTime";

const PopularJobs = () => {
  const navigate = useNavigate();
  const { data: jobs, isLoading } = useTopJobs();
  const popularJobs = jobs?.topJobs;
  console.log(popularJobs);
  console.log(jobs);

  return (
    <section className="popularJobs">
      <Heading
        spanText={"Popular Jobs"}
        text={"for you"}
        btnText={"See All Jobs"}
        subText={"Find jobs that are recommended for you"}
        handleClick={() => navigate("/all-jobs")}
      />
      <div className="popularJobs__jobs">
        {isLoading && <Spinner />}
        {!isLoading &&
          popularJobs &&
          popularJobs.map((job, index) => (
            <JobsCard
              key={index}
              id={job._id}
              image={job.companyId?.companyImage}
              companyName={job.companyId?.companyName}
              position={job.position}
              location={job.location}
              salary={job.salary}
              monthly={job.salaryType}
              fullTime={job.jobType}
              dateOfPost={calculateDaysAgo(job.createdAt)}
              description={job.description}
              applied={job.applicants}
            />
          ))}
          {popularJobs?.length === 0 && <h1>No Popular Jobs Found</h1>}
      </div>
    </section>
  );
};

export default PopularJobs;
