import Jobs from "../components/Jobs/Jobs";
import AllJobsHeading from "../components/Jobs/AllJobsHeading";
import { useJobs } from "../components/Jobs/useJobs";
import Spinner from "../components/Spinner";

const AllJobsPage = () => {
  const { data: jobs, isLoading } = useJobs();
  console.log(jobs);

  return (
    <section className="allJobs">
      <AllJobsHeading />
      {isLoading ? <Spinner /> : null}
      {jobs && (
        <div className="allJobs__main">
          <Jobs jobs={jobs} />{" "}
        </div>
      )}
    </section>
  );
};

export default AllJobsPage;
