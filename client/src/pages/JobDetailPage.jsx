import { BsClock } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { FiClipboard } from "react-icons/fi";


import JobDetailBox from "../components/Jobs/JobDetailBox";
import { useJob } from "../components/Jobs/useJob";
import { formatCleanDate } from "../utils/calculateTime";

const JobDetailPage = () => {
  const { data: job, isLoading, refetch } = useJob();
  console.log(job);

  return (
    <section className="jobDetails">
      {job && (
        <div className="jobDetails__wrapper">
          <div className="jobDetails__heading">
            <div className="jobDetails__heading__title">
              <div className="jobDetails__heading__image">
                <img src={job.companyId.companyImage} />
              </div>
              <h1>{job.position}</h1>
            </div>
            <div className="jobDetails__heading__jobInfo">
              <h2>{job.companyId.companyName}</h2>
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
                <p>Avg. {job.salaryType}</p>
              </div>
              <div className="jobDetails__main__info__condition">
                <JobDetailBox
                  icon={<BsClock />}
                  jobType={job.jobType}
                  jobTypeDesc={"Job Type"}
                />
                <JobDetailBox
                  icon={<FaUsers />}
                  jobType={job.applicants}
                  jobTypeDesc={"Applicants"}
                />
                <JobDetailBox
                  icon={<CiCalendar />}
                  jobType={formatCleanDate(job.createdAt)}
                  jobTypeDesc={"Date Of Post"}
                />
                <JobDetailBox
                  icon={<FiClipboard />}
                  jobType={job.experience}
                  jobTypeDesc={"Experience"}
                />
                <button className="jobDetails__main__info__condition__btn">
                  Apply for this job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobDetailPage;
