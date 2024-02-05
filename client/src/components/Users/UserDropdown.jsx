/* eslint-disable react/prop-types */
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { useLogout } from "../Auth/useLogout";

const UserDropdown = ({ isOpenUserDropdown }) => {
  const { logout, isLoading } = useLogout();

  async function handleLogout() {
    try {
      logout();
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  }

  return (
    <>
      {isOpenUserDropdown ? (
        <div className="header__actions__username__dropdown">
          <button
            className="header__actions__username__dropdown__btn"
            onClick={handleLogout}
            disabled={isLoading}
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      ) : null}
    </>
  );
};

export default UserDropdown;
