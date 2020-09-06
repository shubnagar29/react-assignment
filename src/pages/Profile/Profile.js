import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import SideMenu from "../../components/ProfilePage/SideMenu/SideMenu";
import Header from "../../components/ProfilePage/Header/Header";
import "./Profile.css";
import SelectedUserDetails from "../../components/ProfilePage/SelectedUserDetails/SelectedUserDetails";
import ChatModal from "../../components/ProfilePage/ChatModal/ChatModal";
import ActiveChatModal from "../../components/ProfilePage/ActiveChatModal/ActiveChatModal";
import DisplayError from "../../components/Common/DisplayError/DisplayError";

const Profile = () => {
  const [activeLink, setActiveLink] = useState("Profile");
  const [openModal, setOpenModal] = useState(false);
  const [openChatModal, setOpenChatModal] = useState(false);
  const context = useContext(UserContext);
  const { selectedUser, activeChats, closeAllActiveChats } = context;

  const handleClick = (activeLink) => {
    setActiveLink(activeLink);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const toggleChatModal = () => {
    setOpenChatModal(!openChatModal);
  };

  const closeModal = (e) => {
    if (
      e.target.parentNode.classList.contains("profile-header-user") ||
      e.target.parentNode.classList.contains("user-info-modal") ||
      e.target.classList.contains("user-info-modal")
    ) {
      return;
    } else {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    return closeAllActiveChats();
  }, []);

  return (
    <>
      {!selectedUser ? (
        <DisplayError>
          Please Select the user from{" "}
          <Link to="/" style={{ color: "rgb(235, 33, 33)" }}>
            Users{" "}
          </Link>
          card
        </DisplayError>
      ) : (
        <div className="profile-container" onClick={closeModal}>
          <SideMenu handleClick={handleClick} activeLink={activeLink} />
          <Header
            activeLink={activeLink}
            name={selectedUser.name}
            email={selectedUser.email}
            image={selectedUser.profilepicture}
            toggleModal={toggleModal}
            openModal={openModal}
          />
          {activeLink === "Profile" ? (
            <div className="display-user-details">
              <SelectedUserDetails user={selectedUser} />
            </div>
          ) : (
            <div className="display-coming-soon">
              <h1>Coming Soon</h1>
            </div>
          )}
          <ChatModal
            openChatModal={openChatModal}
            toggleChatModal={toggleChatModal}
          />
          {activeChats.length !== 0 &&
            activeChats.map((activeChat, i) => (
              <ActiveChatModal
                key={activeChat.user.id}
                index={i}
                activeChat={activeChat}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default Profile;
