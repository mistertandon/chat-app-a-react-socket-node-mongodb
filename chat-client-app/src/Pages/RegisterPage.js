import React, { useReducer } from "react";
import {
  registrationReducerInitState,
  registrationReducer,
} from "../Reducers/registrationReducer";

const RegisterPage = () => {
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

  return (
    <div className="registration--ctr">
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
        <button>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
