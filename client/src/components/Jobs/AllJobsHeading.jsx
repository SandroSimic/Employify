/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import ExperienceLevel from "./Filters/ExperienceLevel";
import JobType from "./Filters/JobType";
import SalaryType from "./Filters/SalaryType";
import Category from "./Filters/Category";

const AllJobsHeading = ({
  search,
  setSearch,
  handleSubmit,
  location,
  setLocation,
  clearFilters,
  experience,
  setExperience,
  jobType,
  setJobType,
  salaryType,  
  setSalaryType, 
  category,
  setCategory
}) => {
  return (
    <div className="allJobs__heading">
      <form onSubmit={handleSubmit}>
        <div className="allJobs__heading__form">
          <div className="allJobs__heading__form__input">
            <FaSearch className="allJobs__heading__form__input--icon" />
            <input
              type="text"
              name="position"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Job Title, keywords"
            />
          </div>
          <div className="allJobs__heading__form__input">
            <IoMdPin className="allJobs__heading__form__input--icon" />
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
          <button type="submit" className="allJobs__heading__form__btn">
            Search
          </button>
          <button
            type="submit"
            className="allJobs__heading__form__btn"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>

        <div className="allJobs__heading__filters">
          <ExperienceLevel
            experience={experience}
            setExperience={setExperience}
          />
          <JobType jobType={jobType} setJobType={setJobType} />
          <SalaryType salaryType={salaryType} setSalaryType={setSalaryType} />
          <Category category={category} setCategory={setCategory}/>
        </div>
      </form>
    </div>
  );
};

export default AllJobsHeading;
