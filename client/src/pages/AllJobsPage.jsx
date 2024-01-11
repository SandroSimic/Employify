import Jobs from "../components/Jobs/Jobs";
import AllJobsHeading from "../components/Jobs/AllJobsHeading";
import { jobs } from "./../dummyData";

const AllJobsPage = () => {
  return (
    <section className="allJobs">
      <AllJobsHeading />
      <div className="allJobs__main">
        <Jobs jobs={jobs} />
      </div>
    </section>
  );
};

export default AllJobsPage;
