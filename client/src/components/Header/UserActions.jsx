/* eslint-disable react/prop-types */
import AuthButton from "./AuthButton";
import UserInfo from "./UserInfo";

const UserActions = ({
  loggedUser,
  isOpenUserDropdown,
  setIsOpenUserDropdown,
}) => (
  <div className="header__actions">
    {!loggedUser && (
      <>
        <AuthButton to="/login" text="Sign In" className="signIn" />
        <AuthButton to="/register" text="Register" className="register" />
      </>
    )}
    {loggedUser?.companyId && (
      <UserInfo
        loggedUser={loggedUser}
        isOpenUserDropdown={isOpenUserDropdown}
        setIsOpenUserDropdown={setIsOpenUserDropdown}
      />
    )}
    {loggedUser && !loggedUser.companyId && loggedUser.role === "employee" && (
      <UserInfo
        loggedUser={loggedUser}
        isOpenUserDropdown={isOpenUserDropdown}
        setIsOpenUserDropdown={setIsOpenUserDropdown}
      />
    )}
    {loggedUser && !loggedUser.companyId && loggedUser.role !== "employee" && (
      <>
        <UserInfo
          loggedUser={loggedUser}
          isOpenUserDropdown={isOpenUserDropdown}
          setIsOpenUserDropdown={setIsOpenUserDropdown}
        />
        <AuthButton
          to="/job/create-company"
          text="Create Company"
          className="createCompany"
        />
      </>
    )}
  </div>
);

export default UserActions;
