import Jobs from "../components/Jobs/Jobs";
import AllJobsHeading from "../components/Jobs/AllJobsHeading";
import { useJobs } from "../components/Jobs/useJobs";
import Spinner from "../components/UI/Spinner";
import { useState } from "react";
import Pagination from "../components/UI/Pagination";

const AllJobsPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [experience, setExperience] = useState("");
  const [experienceQuery, setExperienceQuery] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobTypeQuery, setJobTypeQuery] = useState("");
  const [salaryTypeQuery, setSalaryTypeQuery] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [category, setCategory] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");

  const { data: jobs, isLoading } = useJobs({
    search: searchQuery || null,
    location: locationQuery || null,
    experience: experienceQuery || null,
    jobType: jobTypeQuery || null,
    salaryType: salaryTypeQuery || null,
    category: categoryQuery || null,
    page,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(search);
    setLocationQuery(location);
    setExperienceQuery(experience);
    setJobTypeQuery(jobType);
    setSalaryTypeQuery(salaryType);
    setCategoryQuery(category);
  };

  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setExperience("");
    setJobType("");
    setSalaryType("");
    setCategory("");
    setSearchQuery(search);
    setLocationQuery(location);
    setExperienceQuery(experience);
    setJobTypeQuery(jobType);
    setSalaryTypeQuery(salaryType);
    setCategoryQuery(category);
  };

  return (
    <section className="allJobs">
      <AllJobsHeading
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        handleSubmit={handleSubmit}
        clearFilters={clearFilters}
        experience={experience}
        setExperience={setExperience}
        jobType={jobType}
        setJobType={setJobType}
        salaryType={salaryType}
        setSalaryType={setSalaryType}
        category={category}
        setCategory={setCategory}
      />
      {isLoading ? <Spinner /> : null}
      {jobs ? (
        <div className="allJobs__main">
          <Jobs jobs={jobs.jobs} />{" "}
        </div>
      ) : (
        !isLoading && <h1 className="allJobs__error">No Jobs Found. 😥</h1>
      )}
      {jobs?.totalPages > 1 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={jobs?.totalPages}
        />
      )}
    </section>
  );
};

export default AllJobsPage;
