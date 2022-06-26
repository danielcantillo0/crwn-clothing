import SignUpForm from "../../components/signup-form/signup-form";
import SignInForm from "../../components/signin-form/signin-form";
import "./auth.styles.scss";

const Auth = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Auth;
