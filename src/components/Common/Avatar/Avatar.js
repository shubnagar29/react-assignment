import React from "react";
import "./Avatar.css";

const Avatar = ({ src, style, alt }) => {
  return (
    <img
      src={src}
      className="Avatar"
      style={{ ...style, width: "30px", height: "30px" }}
      alt={alt ? alt : "unknown"}
    />
  );
};

export default Avatar;
