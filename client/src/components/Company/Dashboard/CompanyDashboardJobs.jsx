import React from "react";
import JobsCard from "../../Jobs/JobsCard";
import { useGetCompany } from "../useGetCompany";
import { useLoggedInUser } from "../../Auth/useLoggedInUser";
import CompanyDashboardJobCard from "./CompanyDashboardJobCard";

const CompanyDashboardJobs = () => {
  const { data: user } = useLoggedInUser();
  const companyId = user?.companyId?._id;
  const { data: companyData, isLoading: companyIsLoading } =
    useGetCompany(companyId);
  const jobs = companyData?.jobs;
  console.log(jobs);
  return (
    <div className="companyDashboardJobs">
      {jobs?.map((job) => 
        <CompanyDashboardJobCard key={job._id} data={job} />
      )}
    </div>
  );
};

export default CompanyDashboardJobs;
