import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import { useParams } from "react-router-dom";

//components
import SideMenu from "../../components/ProfilePage/SideMenu/SideMenu";
import Header from "../../components/ProfilePage/Header/Header";
import SelectedUserDetails from "../../components/ProfilePage/SelectedUserDetails/SelectedUserDetails";
import ChatModal from "../../components/ProfilePage/ChatModal/ChatModal";
import ActiveChatModal from "../../components/ProfilePage/ActiveChatModal/ActiveChatModal";
import Loader from "../../components/Common/Loader/Loader";

import { UserContext } from "../../context/UserContext";

const Profile = ({ history }) => {
  const [activeLink, setActiveLink] = useState("Profile");
  const [openModal, setOpenModal] = useState(false);
  const [openChatModal, setOpenChatModal] = useState(false);
  const context = useContext(UserContext);
  const {
    selectedUser,
    activeChats,
    closeAllActiveChats,
    getSelectedUser,
    loading,
  } = context;
  const { id } = useParams();
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
    //if no selected user, from userState call to localstorage
    !selectedUser && getSelectedUser(id, history);
    return closeAllActiveChats();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        selectedUser && (
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
        )
      )}
    </>
  );
};

export default Profile;
