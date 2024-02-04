import React from "react";
import CompanyDashboardSidebar from "../components/Company/Dashboard/CompanyDashboardSidebar";
import { Outlet } from "react-router-dom";

const CompanyDashboardLayout = () => {
  return (
    <section className="companyDashboard">
      <div className="companyDashboard__wrapper">
        <CompanyDashboardSidebar />
        <Outlet />
      </div>
    </section>
  );
};

export default CompanyDashboardLayout;
