import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../components/signup-form/signup-form";

import Button from "../../components/button/button";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign with google
      </Button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
