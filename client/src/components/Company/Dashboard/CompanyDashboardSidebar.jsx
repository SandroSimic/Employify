import { FaHome, FaUsers } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoExit } from "react-icons/io5";

const CompanyDashboardSidebar = () => {
  return (
    <nav className="companyDashboard__navbar">
      <ul>
        <li>
          <Link to={"/company/dashboard"}>
            <FaHome />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={"/company/dashboard/applicants"}>
            <FaUsers />
            <p>Applicants</p>
          </Link>
        </li>
        <li>
          <Link to={"/company/dashboard/jobs"}>
            <MdWork />
            <p>Jobs</p>
          </Link>
        </li>
      </ul>
      <Link to={"/"} className="companyDashboard__exit">
        <IoExit />
        <p>Exit</p>
      </Link>
    </nav>
  );
};

export default CompanyDashboardSidebar;
