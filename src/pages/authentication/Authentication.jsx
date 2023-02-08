import React, { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";
import SignInForm from "../../components/sign-in/SignInForm";
import SignUpForm from "../../components/sign-up/SignUpForm";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   async function userRedirect() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }

  //   userRedirect();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      {/* <h1>Sign-in page</h1> */}
      {/* <Button onClick={logGoogleUser}>Sign in with google</Button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
