import React from "react";
import "./SideMenu.css";
import activeLinkSvg from "../../../images/activeLink.svg";

const SideMenuItem = ({ handleClick, activeLink, item }) => {
  return (
    <div style={{ position: "relative" }}>
      <p
        onClick={() => handleClick(item)}
        style={{ color: activeLink === item && "white" }}
      >
        {item}
      </p>
      <hr className="profile-hr" />
      {activeLink === item && (
        <img
          src={activeLinkSvg}
          alt={item}
          width="28"
          className="active-pointer"
        />
        // <div >
        //   <i class="fa fa-angle-right" aria-hidden="true"></i>
        // </div>
      )}
    </div>
  );
};

export default SideMenuItem;
