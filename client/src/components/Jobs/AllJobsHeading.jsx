import { FaSearch } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

const AllJobsHeading = () => {
  return (
    <div className="allJobs__heading">
      <form className="allJobs__heading__form">
        <div className="allJobs__heading__form__input">
          <FaSearch className="allJobs__heading__form__input--icon" />
          <input type="text" placeholder="Job Title, keywords" />
        </div>
        <div className="allJobs__heading__form__input">
          <IoMdPin className="allJobs__heading__form__input--icon" />
          <input type="text" placeholder="Location" />
        </div>
        <button className="allJobs__heading__form__btn">Search</button>
      </form>
      <div className="allJobs__heading__filters">
        <select>
          <option selected disabled hidden>
            Location
          </option>
          <option>Remote</option>
          <option>Office</option>
        </select>
        <select>
          <option selected disabled hidden>
            Experience Level
          </option>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior Level</option>
        </select>
        <select>
          <option selected disabled hidden>
            Job Type
          </option>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Freelance</option>
        </select>
        <select>
          <option selected disabled hidden>
            Salary
          </option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
        <select>
          <option selected disabled hidden>
            Category
          </option>
          <option>Design & Development</option>
          <option>Marketing & Communication</option>
          <option>Digital Marketing</option>
          <option>Customer Service Care</option>
          <option>Finance Management</option>
          <option>Business & Consulting</option>
          <option>Healthcare</option>
          <option>Education</option>
          <option>Fitness and Wellness</option>
        </select>
      </div>
    </div>
  );
};

export default AllJobsHeading;
