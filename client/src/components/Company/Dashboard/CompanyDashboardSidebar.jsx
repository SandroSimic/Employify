import { FaHome, FaUsers } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoExit } from "react-icons/io5";

const CompanyDashboardSidebar = () => {
  return (
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
      <Link to={"/"} className="companyDashboard__exit">
        <IoExit />
        <p>Exit</p>
      </Link>
    </nav>
  );
};

export default CompanyDashboardSidebar;
