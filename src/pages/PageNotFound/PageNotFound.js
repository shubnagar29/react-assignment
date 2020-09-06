import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="display-error-container">
      <div className="display-error-message">
        <i
          className="fa fa-exclamation-circle"
          aria-hidden="true"
          style={{ marginRight: "10px", color: "rgb(235, 33, 33)" }}
        ></i>
        Page Not Found Sry.{" "}
        <Link style={{ color: "rgb(235, 33, 33)" }} to="/">
          {" "}
          Home Here
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
