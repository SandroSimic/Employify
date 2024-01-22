/* eslint-disable react/prop-types */
import UserDropdown from "../Users/UserDropdown";

const UserInfo = ({
  loggedUser,
  isOpenUserDropdown,
  setIsOpenUserDropdown,
}) => (
  <div className="header__actions__userInfo">
    <div
      className="header__actions__username"
      onClick={() => setIsOpenUserDropdown(!isOpenUserDropdown)}
    >
      <p>{loggedUser.username}</p>
      <UserDropdown isOpenUserDropdown={isOpenUserDropdown} />
    </div>
    {loggedUser.companyId ? (
      <img
        src={loggedUser.companyId.companyImage}
        alt={loggedUser.companyId.companyName}
        className="header__actions__image"
      />
    ) : (
      <img
        src={loggedUser.userImage}
        alt={loggedUser.username}
        className="header__actions__image"
      />
    )}
  </div>
);

export default UserInfo;
