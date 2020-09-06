import React, { useContext } from "react";
import Avatar from "../../Common/Avatar/Avatar";
import { UserContext } from "../../../context/UserContext";

const ChatModalUsers = ({ user }) => {
  const context = useContext(UserContext);
  const { activateChat } = context;

  return (
    <div className="chat-modal-user-detail" onClick={() => activateChat(user)}>
      <Avatar src={user.profilepicture} alt={user.name} />
      <p>{user.name}</p>
      <div className="chat-modal-online-user"></div>
    </div>
  );
};

export default ChatModalUsers;
