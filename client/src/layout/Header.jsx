/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoggedInUser } from "../components/Auth/useLoggedInUser";
import UserActions from "../components/Header/UserActions";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenUserDropdown, setIsOpenUserDropdown] = useState(false);
  const [isOpenCompanyDropdown, setIsOpenCompanyDropdown] = useState(false);
  const { data, error, isLoading } = useLoggedInUser();

  const handleNavClick = () => {
    setIsOpenNav(false);
  };

  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to={"/"}>Employify</Link>
      </h1>
      <nav className={`header__navigation ${isOpenNav && "responsive"}`}>
        <ul className={`header__navigation__list ${isOpenNav && "show"}`}>
          <Link to={"/"} onClick={handleNavClick}>
            <li>Home</li>
          </Link>
          <Link to={"/all-jobs"} onClick={handleNavClick}>
            <li>Jobs</li>
          </Link>
          <li onClick={handleNavClick}>Companies</li>
          <li onClick={handleNavClick}>Talent</li>
        </ul>
      </nav>
      <UserActions
        loggedUser={data}
        isOpenUserDropdown={isOpenUserDropdown}
        setIsOpenUserDropdown={setIsOpenUserDropdown}
        isOpenCompanyDropdown={isOpenCompanyDropdown}
        setIsOpenCompanyDropdown={setIsOpenCompanyDropdown}
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
