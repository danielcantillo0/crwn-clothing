import { useState } from "react";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import "./signup-form.styles.scss";

import {
  createAuthUserFromEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";

const defaultProps = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultProps);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultProps);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Dont have an account? Sign Up</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={() => {}}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label=" Email"
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
