/* eslint-disable react/prop-types */
import CompanyDropDown from "../Company/CompanyDropDown";
import AuthButton from "./AuthButton";
import UserInfo from "./UserInfo";

const UserActions = ({
  loggedUser,
  isOpenUserDropdown,
  setIsOpenUserDropdown,
  isOpenCompanyDropdown,
  setIsOpenCompanyDropdown,
}) => {
  return (
    <div className="header__actions">
      {!loggedUser && (
        <>
          <AuthButton to="/login" text="Sign In" className="signIn" />
          <AuthButton to="/register" text="Register" className="register" />
        </>
      )}
      {loggedUser?.companyId && (
        <>
          <UserInfo
            loggedUser={loggedUser}
            isOpenUserDropdown={isOpenUserDropdown}
            setIsOpenUserDropdown={setIsOpenUserDropdown}
            isOpenCompanyDropdown={isOpenCompanyDropdown}
            setIsOpenCompanyDropdown={setIsOpenCompanyDropdown}
          />
          <CompanyDropDown
            isOpenCompanyDropdown={isOpenCompanyDropdown}
            setIsOpenDropdown={setIsOpenCompanyDropdown}
          />
        </>
      )}
      {loggedUser &&
        !loggedUser.companyId &&
        loggedUser.role === "employee" && (
          <UserInfo
            loggedUser={loggedUser}
            isOpenUserDropdown={isOpenUserDropdown}
            setIsOpenUserDropdown={setIsOpenUserDropdown}
          />
        )}
      {loggedUser &&
        !loggedUser.companyId &&
        loggedUser.role !== "employee" && (
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
};

export default UserActions;
