import React, { useContext } from "react";
import "./ChatModal.css";
//component
import ChatModalUsers from "./ChatModalUsers";

import ChatSvg from "../../../images/chat.svg";
import { UserContext } from "../../../context/UserContext";

const ChatModal = ({ openChatModal, toggleChatModal }) => {
  const context = useContext(UserContext);
  const { users, selectedUser } = context;

  return (
    <div
      className="chat-modal"
      style={{ height: openChatModal ? "350px" : "40px" }}
    >
      <div className="chat-modal-header" onClick={toggleChatModal}>
        <div className="chat-modal-header-left">
          <img src={ChatSvg} alt="chat svg" width="24" />
          <h3>Chats</h3>
        </div>
        <i
          className={`fa fa-angle-${openChatModal ? "down" : "up"}`}
          aria-hidden="true"
        ></i>
      </div>
      {openChatModal && (
        <div className="chat-modal-users">
          {users.map((user) => {
            if (user.id !== selectedUser.id) {
              return <ChatModalUsers user={user} key={user.id} />;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default ChatModal;
