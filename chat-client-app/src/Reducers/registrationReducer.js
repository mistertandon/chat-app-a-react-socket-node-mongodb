export const registrationReducerInitState = {
  name: {
    value: "",
    isPristine: true,
    errorStatus: false,
    errorMessage: "",
  },
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

export const registrationReducer = (state, action) => {
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
    case "EMPTY_EMAIL":
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
        password: {
          ...state.password,
          value: action.value,
          isPristine: false,
          errorStatus: false,
          errorMessage: "",
        },
      };

      break;
    case "EMPTY_PASSWORD":
      return {
        ...state,
        password: {
          ...state.password,
          value: "",
          isPristine: false,
          errorStatus: true,
          errorMessage: "Password is mandatory",
        },
      };

      break;
    default:
      return state;
  }
};
