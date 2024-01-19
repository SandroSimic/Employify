import Categories from "../components/Categories/Categories";
import HeroSection from "../components/Hero/HeroSection";
import PopularJobs from "../components/PopularJobs/PopularJobs";
import Statistics from "../components/Statistics/Statistics";

export const MainPage = () => {
  return (
    <>
      <HeroSection />
      <Statistics />
      <Categories />
      <PopularJobs />
    </>
  );
};
