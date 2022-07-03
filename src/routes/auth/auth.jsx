import SignUpForm from "../../components/signup-form/signup-form";
import SignInForm from "../../components/signin-form/signin-form";

import { AuthenticationContainer } from "./auth.styles";

const Auth = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
export default Auth;
