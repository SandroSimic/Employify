import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ formType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (formType === "login") {
      console.log(
        "Logging in with: ",
        formData.get("email"),
        formData.get("password")
      );
    }

    if (formType === "register") {
      "Registering with:",
        formData.get("username"),
        formData.get("email"),
        formData.get("password"),
        formData.get("image");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth__mainForm">
      <h1>Employify</h1>
      <div className="auth__mainForm__text">
        {formType === "login" ? <h2>Welcome Back</h2> : <h2>Welcome</h2>}
        <p>please enter your details</p>
        <div className="auth__mainForm__inputs">
          {formType === "register" && <input placeholder="Username" />}
          <input placeholder="example@gmail.com" type="email" />
          <input placeholder="Password" type="password" />
          {formType === "register" && <input type="file" placeholder="Image" />}

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
