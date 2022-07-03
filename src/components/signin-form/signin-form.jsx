import { useState } from "react";

import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import { SignInContainer, ButtonsContainer } from "./signin-form.styles";

import {
  signInWithGooglePopup,
  signInAuthUserFromEmailAndPassword,
} from "../../utils/firebase/firebase";

const defaultProps = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultProps);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFields = () => {
    setFormFields(defaultProps);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserFromEmailAndPassword(email, password);

      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("Email not registered");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
