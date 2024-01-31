import React from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoExit } from "react-icons/io5";
import { Link } from "react-router-dom";
const CompanyDashboard = () => {
  return (
    <section className="companyDashboard">
      <nav className="companyDashboard__navbar">
        <ul>
          <li>
            <FaHome />
            <p>Home</p>
          </li>
          <li>
            <FaUsers />
            <p>Applicants</p>
          </li>
          <li>
            <MdWork />
            <p>Jobs</p>
          </li>
        </ul>
        <Link to={'/'} className="companyDashboard__exit">
          <IoExit />
          <p>Exit</p>
        </Link>
      </nav>
      <div className="companyDashboard__main">
        <div className="companyDashboard__box">
          <div className="companyDashboard__box__icon">
            <FaUsers />
          </div>
          <h1>Applicants</h1>
          <p>Total Applicants: 123</p>
        </div>
        <div className="companyDashboard__box">
          <div className="companyDashboard__box__icon">
            <MdWork />
          </div>
          <h1>Jobs</h1>
          <p>Total Applicants: 123</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyDashboard;
