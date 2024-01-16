import React from "react";
import loginImage from "../../images/loginImage.jpg";

const Login = () => {
  return (
    <section className="login">
      <form className="login__mainForm">
        <h1>Employify</h1>
        <div className="login__mainForm__text">
          <h2>Welcome Back</h2>
          <p>please enter your details</p>
          <div className="login__mainForm__inputs">
            <input placeholder="example@gmail.com" />
            <input placeholder="Password" />
          </div>
          <button>Continue</button>
        </div>
      </form>
      <div className="login__image"></div>
    </section>
  );
};

export default Login;
