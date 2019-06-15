import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";

export default () => {
  // Variables
  const [action, setAction] = useState("auth");

  return <AuthPresenter action={action} setAction={setAction} />;
};
