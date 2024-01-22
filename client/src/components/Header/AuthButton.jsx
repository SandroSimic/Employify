/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AuthButton = ({ to, text, className }) => (
  <Link to={to}>
    <button className={`header__actions--${className}`}>{text}</button>
  </Link>
);

export default AuthButton;
