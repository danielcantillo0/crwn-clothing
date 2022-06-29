import { useState, useContext } from "react";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import "./signin-form.styles.scss";
import { UserContext } from "../../contexts/user.context";

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

  useContext(UserContext);

  const logGoogleUser = async () => {
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
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={() => {}}>
        <FormInput
          label=" Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
