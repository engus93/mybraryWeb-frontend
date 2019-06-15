import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";

export default () => {
  // Variables
  const [action, setAction] = useState("auth");
  const signInEmail = useInput("");
  const signInPw = useInput("");
  const signUpEmail = useInput("");
  const signUpPw = useInput("");
  const signUpRePw = useInput("");
  const signUpUsername = useInput("");

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      signInEmail={signInEmail}
      signInPw={signInPw}
      signUpEmail={signUpEmail}
      signUpPw={signUpPw}
      signUpRePw={signUpRePw}
      signUpUsername={signUpUsername}
    />
  );
};
