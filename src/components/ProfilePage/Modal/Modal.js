/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import "./Modal.css";
import { withRouter } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import Avatar from "../../Common/Avatar/Avatar";

const Modal = ({ image, email, name, history }) => {
  const context = useContext(UserContext);
  const { users, getSelectedUser } = context;

  const handleClick = (id) => {
    getSelectedUser(id);
    history.push(`/profile/${id}`);
  };

  return (
    <div className="user-info-modal">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p style={{ opacity: "0.2" }}>{email}</p>
      <div>
        <hr className="modal-hr" />
        <div className="online-user" onClick={() => handleClick(4)}>
          <Avatar
            src={users[3].profilepicture}
            alt="image"
            style={{ marginRight: "10px" }}
          />
          <p>{users[3].name}</p>
        </div>
      </div>
      <div>
        <hr className="modal-hr" />
        <div className="online-user" onClick={() => handleClick(6)}>
          <Avatar
            src={users[5].profilepicture}
            alt="image 2"
            style={{ marginRight: "10px" }}
          />
          <p>{users[5].name}</p>
        </div>
      </div>

      <button className="user-modal-button" onClick={() => history.push("/")}>
        Sign out
      </button>
    </div>
  );
};

export default withRouter(Modal);
