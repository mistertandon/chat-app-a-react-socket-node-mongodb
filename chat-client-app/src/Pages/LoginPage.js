import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../helper/request";
import {
  loginReducerInitState,
  loginReducer,
} from "./../Reducers/loginReducer";

const LoginPage = () => {
  let navigate = useNavigate();

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

  const handleLoginRequest = async (event) => {
    event.preventDefault();

    try {
      const response = await makeRequest(
        "POST",
        "http://localhost:8000/user/login",
        {
          email: emailValue,
          password: passwordVal,
        }
      );
      const {
        data: { token },
      } = response;

      // console.log("response", response);
      localStorage.setItem("MERN_CHAT_APP_TOKEN", token);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEmailInput = (event) => {
    const emailInput = event.target.value;

    dispatch({ type: "UPDATE_EMAIL", value: emailInput });

    if (!emailInput) {
      dispatch({ type: "EMPTY_EMAIL" });
    }
  };

  const handlePasswordInput = (event) => {
    const passwordInput = event.target.value;

    dispatch({ type: "UPDATE_PASSWORD", value: passwordInput });
    if (!passwordInput) {
      dispatch({ type: "EMPTY_PASSWORD" });
    }
  };

  const formErrorsResolved =
    !emailErrorStatus &&
    !passwordErrorStatus &&
    !isEmailPristine &&
    !isPasswordPristine;

  return (
    <div className="login--ctr">
      <form onSubmit={handleLoginRequest}>
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
          <button disabled={formErrorsResolved != true} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
