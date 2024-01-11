/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Heading from "../Heading";
import JobsCard from "../Jobs/JobsCard";
const PopularJobs = ({ jobs }) => {
  const navigate = useNavigate();

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
      </div>
    </section>
  );
};

export default PopularJobs;
