import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState();

  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to={'/'}>Employify</Link>
      </h1>
      <nav className={`header__navigation ${isOpenNav ? "responsive" : ""}`}>
        <ul className={`header__navigation__list ${isOpenNav ? "show" : ""}`}>
          <Link to={"/all-jobs"}>
            <li>Jobs</li>
          </Link>
          <li>Companies</li>
          <li>Talent</li>
        </ul>
      </nav>
      <div className="header__actions">
        <Link to={"/login"}>
          <button className="header__actions--signIn">Sign In</button>
        </Link>
        <Link to={"/register"}>
          <button className="header__actions--register">Register</button>
        </Link>
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
