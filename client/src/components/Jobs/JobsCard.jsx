/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { calculateDaysAgo } from "../../utils/calculateTime";

const JobsCard = ({ data }) => {
  const {
    _id,
    createdAt,
    jobType,
    location,
    position,
    salary,
    salaryType,
    applicants
  } = data;
  const { companyImage, companyName } = data.companyId;
  return (
    <div className="job__info">
      <div className="job__info__job">
        <div className="job__info__job__info">
          <div className="job__info__job__location">
            <img src={companyImage} />
            <div className="job__info__job__location__text">
              <h3>{companyName}</h3>
              <span>
                <FaLocationDot className="span__icon" /> {location}
              </span>
            </div>
          </div>
          <div className="job__info__job__salary">
            <span>${salary}</span>
            <p>/{salaryType}</p>
          </div>
        </div>
      </div>
      <div className="job__info__text">
        <h2>{position}</h2>
        <span>
          {jobType} &bull; {calculateDaysAgo(createdAt)}
        </span>
      </div>
      <div className="job__info__apply">
        <Link to={`/job/${_id}`}>
          <button>Apply Now</button>
        </Link>
        <p>{!applicants ? "0" : applicants.length} Applied</p>
      </div>
    </div>
  );
};

export default JobsCard;
