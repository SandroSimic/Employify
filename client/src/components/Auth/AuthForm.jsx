import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import { useCreateCompany } from "./useCreateCompany";

const AuthForm = ({ formType }) => {
  const [userType, setUserType] = useState("employee");
  const { isLoading, loginUserQuery } = useLogin();
  const { isLoading: isRegistering, registerUserQuery } = useRegister();

  const { handleSubmit, register } = useForm();

  const handleUserTypeClick = (type) => {
    setUserType(type);
  };

  async function onSubmit(userData) {
    const formData = new FormData();

    if (formType === "login") {
      formData.append("email", userData.email);
      formData.append("password", userData.password);

      if (!formData) return;

      try {
        loginUserQuery(formData);
      } catch (error) {
        console.log(error.response);
      }
    }

    if (formType === "register") {
      formData.append("username", userData.username);
      formData.append("email", userData.email);
      formData.append("password", userData.password);
      formData.append("userImage", userData.userImage[0]);
      formData.append("role", userType);

      if (!formData) return;

      try {
        registerUserQuery(formData);
      } catch (error) {
        console.log(error.response);
      }
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="auth__mainForm">
      <h1>Employify</h1>
      <div className="auth__mainForm__text">
        {formType === "login" ? <h2>Welcome Back</h2> : <h2>Welcome</h2>}
        <p>please enter your details</p>
        <div className="auth__mainForm__inputs">
          {formType === "register" && (
            <input placeholder="Username" {...register("username")} />
          )}
          <input
            placeholder="example@gmail.com"
            type="email"
            {...register("email")}
          />
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {formType === "register" && (
            <>
              <input
                type="file"
                placeholder="Image"
                {...register("userImage")}
              />
              <div className="auth__mainForm__inputs__actions">
                <p>User Type</p>
                <div className="auth__mainForm__inputs__userType">
                  <span
                    onClick={() => handleUserTypeClick("employee")}
                    className={userType === "employee" ? "active" : ""}
                  >
                    Employee
                  </span>
                  <span
                    onClick={() => handleUserTypeClick("employer")}
                    className={userType === "employer" ? "active" : ""}
                  >
                    Employer
                  </span>
                </div>
              </div>
            </>
          )}

          {formType === "login" ? (
            <p>
              Don't have an account? <Link to={"/register"}>Register</Link>
            </p>
          ) : (
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          )}
        </div>

        {formType === "login" ? (
          <button>Continue</button>
        ) : (
          <button>Register</button>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
