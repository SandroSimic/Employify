/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoggedInUser } from "../components/Auth/useLoggedInUser";
import UserActions from "../components/Header/UserActions";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenUserDropdown, setIsOpenUserDropdown] = useState(false);
  const { data, refetch } = useLoggedInUser();
  const { user: loggedUser } = data || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [refetch]);

  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to={"/"}>Employify</Link>
      </h1>
      <nav className={`header__navigation ${isOpenNav && "responsive"}`}>
        <ul className={`header__navigation__list ${isOpenNav && "show"}`}>
          <Link to={"/all-jobs"}>
            <li>Jobs</li>
          </Link>
          <li>Companies</li>
          <li>Talent</li>
        </ul>
      </nav>
      <UserActions
        loggedUser={loggedUser}
        isOpenUserDropdown={isOpenUserDropdown}
        setIsOpenUserDropdown={setIsOpenUserDropdown}
      />
      <div
        className={`header__hamburger${isOpenNav ? "--active" : ""}`}
        onClick={() => setIsOpenNav(!isOpenNav)}
      >
        <div className={`line line1 ${isOpenNav ? "active" : ""}`}></div>
        <div className={`line line2 ${isOpenNav ? "active" : ""}`}></div>
        <div className={`line line3 ${isOpenNav ? "active" : ""}`}></div>
      </div>
    </header>
  );
};

export default Header;
