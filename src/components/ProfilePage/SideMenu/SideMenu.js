import React from "react";
import "./SideMenu.css";
import SideMenuItem from "./SideMenuItem";
import HomeSvg from "../../../images/home.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SideMenu = ({ handleClick, activeLink }) => {
  const sideMenuItem = ["Profile", "Posts", "Gallery", "Todo"];
  return (
    <motion.div
      className="profile-sidemenu"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      {sideMenuItem.map((item, i) => (
        <SideMenuItem
          item={item}
          key={i}
          handleClick={handleClick}
          activeLink={activeLink}
        />
      ))}
      <Link to="/">
        <img src={HomeSvg} alt="home" width="22" className="home-link" />
      </Link>
    </motion.div>
  );
};

export default SideMenu;
