import React from "react";
import "./Header.css";

//component
import Modal from "../Modal/Modal";
import Avatar from "../../Common/Avatar/Avatar";

const Header = ({ activeLink, name, image, toggleModal, openModal, email }) => {
  return (
    <div className="profile-header">
      <div className="profile-header-content">
        <p>{activeLink}</p>
        <div className="profile-header-user" onClick={toggleModal}>
          <Avatar src={image} alt={name} style={{ marginRight: "10px" }} />
          <p>{name}</p>
        </div>
        {openModal && <Modal image={image} email={email} name={name} />}
      </div>
      <hr className="profile-header-hr" />
    </div>
  );
};

export default Header;
