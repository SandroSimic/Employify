import React from "react";
import { useLoggedInUser } from "../components/Auth/useLoggedInUser";
import { useGetApplicantsForCompany } from "../components/Jobs/Applicants/useGetApplicantsForCompany";
import { useGetCompany } from "../components/Company/useGetCompany";
import CompanyDashboardSidebar from "../components/Company/Dashboard/CompanyDashboardSidebar";
import { FaUsers } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import CompanyDashboardMain from "../components/Company/Dashboard/CompanyDashboardMain";
const CompanyDashboard = () => {
  const { data } = useGetApplicantsForCompany();
  const { data: user } = useLoggedInUser();
  const companyId = user?.companyId?._id;
  const {
    data: companyData,
    error: companyError,
    isLoading: companyIsLoading,
    refetch: refetchCompany,
  } = useGetCompany(companyId);

  console.log(companyData);
  return (
    <section className="companyDashboard">
      <div className="companyDashboard__wrapper">
        <CompanyDashboardSidebar />
        <CompanyDashboardMain
          applicants={data?.applicants}
          jobs={companyData?.jobs}
        />
      </div>
    </section>
  );
};

export default CompanyDashboard;
