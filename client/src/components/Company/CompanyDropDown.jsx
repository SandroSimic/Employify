import React from "react";
import { FaPlusCircle } from "react-icons/fa";

import { FaGear } from "react-icons/fa6";

const CompanyDropDown = ({ isOpenCompanyDropdown }) => {
  return (
    <>
      {isOpenCompanyDropdown ? (
        <div className="header__actions__username__dropdown__company">
          <button className="header__actions__username__dropdown__company__btn">
            <FaPlusCircle />
            Add Job
          </button>
          <button className="header__actions__username__dropdown__company__btn">
            <FaGear />
            Company
          </button>
        </div>
      ) : null}
    </>
  );
};

export default CompanyDropDown;
