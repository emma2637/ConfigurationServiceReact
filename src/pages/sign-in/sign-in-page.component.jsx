import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./sign-in-page.styles.scss";

const SignInPage = () => (
  <div className="sign-in-container mx-auto position-absolute top-50 start-50 translate-middle">
    <SignIn></SignIn>
  </div>
);

export default SignInPage;
