import React, { useReducer } from "react";
import { Link } from "react-router-dom";
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
      <div className="child-a--dc field--ctr-dc">
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
      <div className="child-b--dc field--ctr-dc">
        <button>Create</button>
      </div>
      <div className="child-c--dc classrooms--ctr">
        <div className="cc-child-a--dc classroom--ctr">
          <div className="ccca-child-a--dc">Guest</div>
          <div className="ccca-child-b--dc">
            <Link to={`/chatroom/123456`}>Join</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
