/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoggedInUser } from "../components/Auth/useLoggedInUser";

const AuthButton = ({ to, text, className }) => (
  <Link to={to}>
    <button className={`header__actions--${className}`}>{text}</button>
  </Link>
);

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { user, refetch } = useLoggedInUser();
  const { user: loggedUser } = user || {};

  useEffect(() => {
    refetch();
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
      <div className="header__actions">
        {!loggedUser && (
          <>
            <AuthButton to="/login" text="Sign In" className="signIn" />
            <AuthButton to="/register" text="Register" className="register" />
          </>
        )}
        {loggedUser?.companyId && (
          <>
            <p className="header__actions__username">{loggedUser.username}</p>
            <img
              src={loggedUser.companyId.companyImage}
              alt={loggedUser.companyId.companyName}
              className="header__actions__image"
            />
          </>
        )}
        {loggedUser && !loggedUser.companyId && (
          <>
            <p className="header__actions__username">{loggedUser.username}</p>
            <AuthButton to="/create-company" text="Create Company" className="createCompany" />
          </>
        )}
      </div>
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
