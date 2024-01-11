import React from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../dummyData";
import { BsClock } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";

import JobDetailBox from "../components/Jobs/JobDetailBox";

const JobDetailPage = () => {
  const { jobId } = useParams();

  const jobIdToFind = parseInt(jobId);

  const job = jobs.find((job) => job.id === jobIdToFind);

  return (
    <section className="jobDetails">
      <div className="jobDetails__wrapper">
        <div className="jobDetails__heading">
          <div className="jobDetails__heading__title">
            <div className="jobDetails__heading__image">
              <img src={job.image} />
            </div>
            <h1>{job.position}</h1>
          </div>
          <div className="jobDetails__heading__jobInfo">
            <h2>{job.CompanyName}</h2>
            <p>{job.location}</p>
          </div>
        </div>
        <div className="jobDetails__main">
          <div className="jobDetails__main__desc">
            <p>{job.description}</p>
          </div>
          <div className="jobDetails__main__info">
            <div className="jobDetails__main__info__location">
              <div>
                <LuMapPin />
                <h3>{job.location}</h3>
              </div>
              <p>Please send us you detailed CV to apply for this job post</p>
            </div>
            <div className="jobDetails__main__info__salary">
              <h3>${job.salary}</h3>
              <p>Avg. {job.monthly ? "Monthly" : "Yearly"}</p>
            </div>
            <div className="jobDetails__main__info__condition">
              <JobDetailBox
                icon={<BsClock />}
                jobType={job.fullTime ? "Full-Time" : "Part-Time"}
                jobTypeDesc={"Job Type"}
              />
              <JobDetailBox
                icon={<FaUsers />}
                jobType={job.applied}
                jobTypeDesc={"Applicants"}
              />
              <JobDetailBox
                icon={<CiCalendar />}
                jobType={job.dateOfPost}
                jobTypeDesc={"Date Of Post"}
              />
              <button className="jobDetails__main__info__condition__btn">Apply for this job</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailPage;
