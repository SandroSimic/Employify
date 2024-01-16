import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

const Login = () => {
  return (
    <section className="auth">
      <AuthForm formType={"login"} />
      <div className="auth__image"></div>
    </section>
  );
};

export default Login;
