/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobsCard = ({
  id,
  image,
  companyName,
  location,
  salary,
  monthly,
  position,
  fullTime,
  dateOfPost,
  description,
  applied,
}) => {
  return (
    <div className="job__info">
      <div className="job__info__job">
        <div className="job__info__job__info">
          <div className="job__info__job__location">
            <img src={image} />
            <div className="job__info__job__location__text">
              <h3>{companyName}</h3>
              <span>
                <FaLocationDot className="span__icon" /> {location}
              </span>
            </div>
          </div>
          <div className="job__info__job__salary">
            <span>${salary}</span>
            <p>/{monthly}</p>
          </div>
        </div>
      </div>
      <div className="job__info__text">
        <h2>{position}</h2>
        <span>
          {fullTime} &bull; {dateOfPost}
        </span>
        <p>{`${description.slice(0, 100)}...`}</p>
      </div>
      <div className="job__info__apply">
        <Link to={`/job/${id}`}>
          <button>Apply Now</button>
        </Link>
        <p>{applied} Applied</p>
      </div>
    </div>
  );
};

export default JobsCard;
