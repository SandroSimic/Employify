/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const UserDropdown = ({ isOpenUserDropdown }) => {
  return (
    <>
      {isOpenUserDropdown ? (
        <div className="header__actions__username__dropdown">
          <button className="header__actions__username__dropdown__btn">
            <FaUser />
            Profile
          </button>
          <button className="header__actions__username__dropdown__btn">
            <FaGear />
            Settings
          </button>
        </div>
      ) : null}
    </>
  );
};

export default UserDropdown;
