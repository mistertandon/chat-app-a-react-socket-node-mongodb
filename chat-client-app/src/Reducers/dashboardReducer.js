import React from "react";

export const dashboardReducerInitState = {
  name: {
    value: "",
    isPristine: true,
    errorStatus: false,
    errorMessage: "",
  },
};

export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: {
          ...state.name,
          value: action.value,
          isPristine: false,
          errorStatus: false,
          errorMessage: "",
        },
      };

      break;
    case "EMPTY_NAME":
      return {
        ...state,

        name: {
          ...state.name,
          value: "",
          isPristine: false,
          errorStatus: true,
          errorMessage: "Name is manadtory field",
        },
      };

      break;
    default:
      return state;
  }
};
