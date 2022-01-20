import React, { useReducer } from "react";

import {
  dashboardReducerInitState,
  dashboardReducer,
} from "./../Reducers/dashboardReducer";

const DashboardPage = () => {
  const [
    {
      name: {
        value: nameValue,
        isPristine: isNamePristine,
        errorStatus: nameErrorStatus,
        errorMessage: nameErrorMessage,
      },
    },
    dispatch,
  ] = useReducer(dashboardReducer, dashboardReducerInitState);

  const handleNameInput = (event) => {
    const nameInput = event.target.value;

    dispatch({ type: "UPDATE_NAME", value: nameInput });
    if (!nameInput) {
      dispatch({ type: "EMPTY_NAME" });
    } else {
    }
  };

  return (
    <div className="dashboard--ctr">
      <div className="field--ctr-dc">
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
      <div className="field--ctr-dc">
        <button>Create</button>
      </div>
    </div>
  );
};

export default DashboardPage;
