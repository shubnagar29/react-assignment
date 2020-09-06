import React from "react";
import "./UserDetail.css";
import Avatar from "../../Common/Avatar/Avatar";

const UserDetail = ({ name, image, id, handleClick }) => {
  return (
    <>
      <div className="user-detail-container" onClick={() => handleClick(id)}>
        <Avatar src={image} alt={name} style={{ marginRight: "15px" }} />
        <p className="user-name">{name}</p>
      </div>
      <hr className="user-hr" />
    </>
  );
};

export default UserDetail;
