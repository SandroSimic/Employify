import React from "react";
import { useLoggedInUser } from "../components/Auth/useLoggedInUser";
import { useGetApplicantsForCompany } from "../components/Jobs/Applicants/useGetApplicantsForCompany";
import { useGetCompany } from "../components/Company/useGetCompany";
import CompanyDashboardMain from "../components/Company/Dashboard/CompanyDashboardMain";
import Spinner from "../components/UI/Spinner";
import CompanyDashboardLayout from "../layout/CompanyDashboardLayout";

const CompanyDashboard = () => {
  const { data } = useGetApplicantsForCompany();
  const { data: user } = useLoggedInUser();
  const companyId = user?.companyId?._id;
  const { data: companyData, isLoading: companyIsLoading } =
    useGetCompany(companyId);

  if (companyIsLoading) {
    return <Spinner />;
  }

  return (
      <CompanyDashboardMain
        applicants={data?.applicants}
        jobs={companyData?.jobs}
      />
  );
};

export default CompanyDashboard;
