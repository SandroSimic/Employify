import AuthForm from "./AuthForm";

const Register = () => {
  return (
    <section className="auth">
      <AuthForm formType={"register"} />
      <div className="auth__image"></div>
    </section>
  );
};

export default Register;
