import React from "react";
import "./DisplayError.css";

const DisplayError = ({ children }) => {
  return (
    <div className="display-error-container">
      <div className="display-error-message">
        <i
          className="fa fa-exclamation-circle"
          aria-hidden="true"
          style={{ marginRight: "10px", color: "rgb(235, 33, 33)" }}
        ></i>
        {children}
      </div>
    </div>
  );
};

export default DisplayError;
