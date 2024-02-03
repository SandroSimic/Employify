/* eslint-disable react/prop-types */
import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DateTime } from "luxon";

const CompanyDashboardMain = ({ applicants, jobs }) => {
  console.log(applicants)
  console.log(jobs)
  const data = Array.from({ length: 6 }, (_, i) => {
    const startOfMonth = DateTime.now().minus({ months: i }).startOf("month");
    const endOfMonth = DateTime.now().minus({ months: i }).endOf("month");
  
    return {
      name: startOfMonth.toFormat("MMMM yyyy"),
      applicants: applicants?.filter(applicant => {
        const applicationDate = DateTime.fromISO(applicant.createdAt);
        return applicationDate >= startOfMonth && applicationDate <= endOfMonth;
      }).length,
      jobs: jobs?.filter(job => {
        const jobDate = DateTime.fromISO(job.createdAt);
        return jobDate >= startOfMonth && jobDate <= endOfMonth;
      }).length,
    };
  }).reverse();
  

  return (
    <div className="companyDashboard__main">
      <div className="companyDashboard__main__info">
        <div className="companyDashboard__box">
          <div className="companyDashboard__box__icon">
            <FaUsers />
          </div>
          <h1>Applicants</h1>
          <p>Total Applicants: {applicants?.length || 0}</p>
        </div>
        <div className="companyDashboard__box">
          <div className="companyDashboard__box__icon">
            <MdWork />
          </div>
          <h1>Jobs</h1>
          <p>Total Jobs: {jobs?.length || 0}</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="applicants" stroke="green" />
          <Line type="monotone" dataKey="jobs" stroke="#6362e0" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompanyDashboardMain;
