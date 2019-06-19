// Import Modules
import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

// Import My Files
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import {
  DUPLICATE_CHECK,
  CREATE_ACCOUNT,
  AUTHENTICATION,
  LOCAL_LOG_IN
} from "./AuthQueries";

export default withRouter(() => {
  // Variables
  const [action, setAction] = useState("auth");
  const signInEmail = useInput("");
  const signInPw = useInput("");
  const signUpEmail = useInput("");
  const signUpPw = useInput("");
  const signUpRePw = useInput("");
  const signUpUsername = useInput("");

  // Apollo Client

  // 이메일 중복 체크
  const duplicateEmailMutation = useMutation(DUPLICATE_CHECK, {
    variables: { action: "email", word: signUpEmail.value }
  });

  // 닉네임 중복 체크
  const duplicateUsernameMutation = useMutation(DUPLICATE_CHECK, {
    variables: { action: "username", word: signUpUsername.value }
  });

  // 회원 가입
  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: signUpEmail.value,
      pw: signUpPw.value,
      username: signUpUsername.value
    }
  });

  // 로그인 정보 & 이메일 인증 체크
  const authenticationMutation = useMutation(AUTHENTICATION, {
    variables: { email: signInEmail.value, pw: signInPw.value }
  });

  // 토큰 발행
  const localLogInMutation = useMutation(LOCAL_LOG_IN);

  // Event
  const signOnSubmit = async event => {
    event.preventDefault();
    if (action === "signUp") {
      // 이메일 중복 체크
      if (signUpEmail.value !== "") {
        try {
          const {
            data: { duplicateCheck }
          } = await duplicateEmailMutation();
          if (duplicateCheck) {
            return toast.error("이미 존재하는 아이디입니다. 🤦‍♂️");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return toast.error("Email 값이 비어있습니다.");
      }

      // 비밀번호 정규식 체크
      if (signUpPw.value !== "") {
        if (signUpPw.value.length < 8 || signUpPw.value.length > 16) {
          return toast.error("암호를 8자이상 16자 이하로 설정해주세요.");
        }

        const check = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;

        if (!check.test(signUpPw.value)) {
          return toast.error("영문, 숫자, 특수문자의 조합으로 입력해주세요.");
        }
      } else {
        return toast.error("Password 값이 비어있습니다.");
      }

      // 패스워드 동일한지 체크
      if (signUpRePw.value !== "") {
        if (signUpPw.value !== signUpRePw.value) {
          return toast.error("비밀번호가 일치하지않습니다.");
        }
      } else {
        return toast.error("Re Password 값이 비어있습니다.");
      }

      // 닉네임 중복 체크
      if (signUpUsername.value !== "") {
        try {
          const {
            data: { duplicateCheck }
          } = await duplicateUsernameMutation();
          if (duplicateCheck) {
            return toast.error("이미 존재하는 닉네임입니다. 🤦‍♂️");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return toast.error("User Name 값이 비어있습니다.");
      }

      // Create Account Mutation
      try {
        const {
          data: { createAccount }
        } = await createAccountMutation();

        if (createAccount) {
          toast.success("가입을 완료하였습니다. 👌");
          // 가입 정보 로그인 창에 넣기
          signInEmail.setValue(signUpEmail.value);
          signInPw.setValue(signUpPw.value);
          // Values Initial
          signUpEmail.setValue("");
          signUpPw.setValue("");
          signUpRePw.setValue("");
          signUpUsername.setValue("");

          setAction("signIn");
        }
      } catch (error) {
        toast.error("알 수 없는 오류가 발생했습니다. 다시 한번 시도해주세요.");
      }
    } else if (action === "signIn") {
      try {
        const {
          data: { authentication: token }
        } = await authenticationMutation();
        if (token === "" || token === undefined) {
          // eslint-disable-next-line no-throw-literal
          throw "알 수 없는 오류가 발생했습니다. 다시 한번 시도해주세요.";
        } else if (
          token === "아이디가 일치하지 않습니다." ||
          token === "비밀번호가 일치하지 않습니다."
        ) {
          throw token;
        } else {
          await localLogInMutation({ variables: { token } });
        }
      } catch (error) {
        toast.error(error);
      }
    }
  };

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
      signOnSubmit={signOnSubmit}
    />
  );
});
