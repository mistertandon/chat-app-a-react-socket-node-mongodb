import React, { useReducer } from "react";
import {
  loginReducerInitState,
  loginReducer,
} from "./../Reducers/loginReducer";

const LoginPage = () => {
  const [
    {
      email: {
        value: emailValue,
        isPristine: isEmailPristine,
        errorStatus: emailErrorStatus,
        errorMessage: emailErrorMessage,
      },
      password: {
        value: passwordVal,
        isPristine: isPasswordPristine,
        errorStatus: passwordErrorStatus,
        errorMessage: passwordErrorMessage,
      },
    },
    dispatch,
  ] = useReducer(loginReducer, loginReducerInitState);

  const handleEmailInput = (event) => {
    const emailInput = event.target.value;
    console.log("emailInput", emailInput);
    dispatch({ type: "UPDATE_EMAIL", value: emailInput });

    if (!emailInput) {
      dispatch({ type: "EMAIL_EMPTY", value: "" });
    }
  };

  const handlePasswordInput = (event) => {
    const passwordInput = event.target.value;

    dispatch({ type: "UPDATE_PASSWORD", value: passwordInput });
  };

  return (
    <div className="login--ctr">
      <div className="field--ctr-lc">
        <label> Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={emailValue}
          onChange={handleEmailInput}
        />
      </div>
      <div className="field--ctr-lc">
        <label> Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={passwordVal}
          onChange={handlePasswordInput}
        />
      </div>
      <div className="field--ctr-lc">
        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
