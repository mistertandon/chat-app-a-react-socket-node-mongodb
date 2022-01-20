import React from "react";

export const loginReducerInitState = {
  email: {
    value: "",
    isPristine: true,
    errorStatus: false,
    errorMessage: "",
  },
  password: {
    value: "",
    isPristine: true,
    errorStatus: false,
    errorMessage: "",
  },
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: {
          ...state.email,
          value: action.value,
          isPristine: false,
          errorStatus: false,
          errorMessage: "",
        },
      };

      break;
    case "EMAIL_EMPTY":
      return {
        ...state,

        email: {
          ...state.email,
          value: "",
          isPristine: false,
          errorStatus: true,
          errorMessage: "Email is manadtory field",
        },
      };

      break;
    case "UPDATE_PASSWORD":
      return {
        ...state,
        password: { ...state.password, value: action.value },
      };

      break;
    default:
      return state;
  }
};
