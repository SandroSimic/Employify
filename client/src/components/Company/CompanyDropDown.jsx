import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CompanyDropDown = ({ isOpenCompanyDropdown }) => {
  return (
    <>
      {isOpenCompanyDropdown ? (
        <div className="header__actions__username__dropdown__company">
          <Link to={"job/add-job"}>
            <button className="header__actions__username__dropdown__company__btn">
              <FaPlusCircle />
              Add Job
            </button>
          </Link>
          <Link to={"/company/dashboard"}>
            <button className="header__actions__username__dropdown__company__btn">
              <MdDashboard />
              Dashboard
            </button>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default CompanyDropDown;
