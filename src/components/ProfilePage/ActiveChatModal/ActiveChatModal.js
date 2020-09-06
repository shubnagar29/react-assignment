import React, { useContext } from "react";
import "./ActiveChatModal.css";

//component
import Avatar from "../../Common/Avatar/Avatar";

import sendButtonSvg from "../../../images/send.svg";
import { UserContext } from "../../../context/UserContext";

const ActiveChatModal = ({ index, activeChat }) => {
  const context = useContext(UserContext);
  const { toggleActiveChat, closeActiveChat } = context;

  return (
    <div
      className="active-chat-modal"
      style={{
        right: `${index === 0 ? 300 : 300 + index * 260}px`,
        height: activeChat.chatOpen ? "300px" : "40px",
      }}
    >
      <div className="active-chat-modal-header">
        <div className="active-chat-modal-header-left">
          <Avatar
            src={activeChat.user.profilepicture}
            alt={activeChat.user.name}
            style={{ marginRight: "5px" }}
          />
          <p>{activeChat.user.name}</p>
        </div>
        <div className="active-chat-modal-header-right">
          <i
            className={`fa fa-angle-${activeChat.chatOpen ? "down" : "up"}`}
            aria-hidden="true"
            onClick={() => toggleActiveChat(activeChat.user.id)}
          ></i>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => closeActiveChat(activeChat.user.id)}
          ></i>
        </div>
      </div>

      {/* chat message with user can be dynamic */}
      <div className="active-chat-modal-messages">
        <div className="selected-users-message">
          <p>Lorem ipsum dolor, sit amet!</p>
        </div>
        <div className="other-users-message">
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
        </div>
        <div className="selected-users-message">
          <p>Lorem ipsum dolor, sit amet!</p>
        </div>
      </div>

      <div className="active-chat-modal-input">
        <input type="text" />
        <img
          src={sendButtonSvg}
          alt="send button"
          width="18"
          className="active-chat-modal-send-button"
        />
      </div>
    </div>
  );
};

export default ActiveChatModal;
