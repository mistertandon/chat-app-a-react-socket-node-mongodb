import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  registrationReducerInitState,
  registrationReducer,
} from "../Reducers/registrationReducer";
import { makeRequest } from "./../helper/request";

const RegisterPage = () => {
  let navigate = useNavigate();

  const [
    {
      name: {
        value: nameValue,
        isPristine: isNamePristine,
        errorStatus: nameErrorStatus,
        errorMessage: nameErrorMessage,
      },
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
  ] = useReducer(registrationReducer, registrationReducerInitState);

  const handleUserRegistration = async (event) => {
    event.preventDefault();

    try {
      const response = await makeRequest(
        "POST",
        "http://localhost:8000/user/register",
        {
          name: nameValue,
          email: emailValue,
          password: passwordVal,
        }
      );
      console.log("response", response);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleNameInput = (event) => {
    const nameInput = event.target.value;

    dispatch({ type: "UPDATE_NAME", value: nameInput });
    if (!nameInput) {
      dispatch({ type: "EMPTY_NAME" });
    } else {
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

  const formErrorResolved =
    !nameErrorStatus &&
    !emailErrorStatus &&
    !passwordErrorStatus &&
    !isNamePristine &&
    !isEmailPristine &&
    !isPasswordPristine;

  return (
    <div className="registration--ctr">
      <form onSubmit={handleUserRegistration}>
        <div className="field--ctr-rc">
          <label> Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            value={nameValue}
            onChange={handleNameInput}
          />
        </div>
        <div className="field--ctr-rc">
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
        <div className="field--ctr-rc">
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
        <div className="field--ctr-rc">
          <button disabled={formErrorResolved != true} type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
