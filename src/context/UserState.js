import React, { useState } from "react";
import { UserContext } from "./UserContext";

//initialState
const initialState = {
  users: null,
  selectedUser: null,
  loading: false,
  error: null,
  activeChats: [],
};

//fetching users from server
const UserState = ({ children }) => {
  const [state, setState] = useState(initialState);

  const getAllUsers = async () => {
    setState({
      ...state,
      loading: true,
    });
    try {
      const res = await fetch(process.env.REACT_APP_API_URL, {
        method: "GET",
        "content-Type": "application/json",
        accept: "application/json",
      });

      const data = await res.json();
      //   console.log(data.users);
      //success
      if (data) {
        localStorage.setItem("users", JSON.stringify(data.users));
        setTimeout(() => {
          setState({
            ...state,
            loading: false,
            users: data.users,
            error: null,
          });
        }, 1000);
      }
    } catch (error) {
      //set error
      setState({
        ...state,
        loading: false,
        error: "Something Went Wrong",
      });
      setTimeout(() => {
        setState({
          ...state,
          error: null,
        });
      }, 3000);
    }
  };

  //getting the user who was selected
  const getSelectedUser = (id, history) => {
    if (!state.users) {
      const users = JSON.parse(localStorage.getItem("users"));
      const selectedUser =
        users && users.find((user) => user.id === parseFloat(id));
      setTimeout(() => {
        setState({
          ...state,
          selectedUser,
          users,
          loading: false,
        });
      }, 0.1);
      if (!selectedUser) {
        history.push("/");
      }
    } else {
      const selectedUser =
        state.users && state.users.find((user) => user.id === id);
      setState({
        ...state,
        selectedUser,
      });
    }
  };

  //opening user chat modal
  const activateChat = (user) => {
    const index = state.activeChats.findIndex(
      (chat) => chat.user.id === user.id
    );
    if (state.activeChats.length !== 3 && index === -1) {
      setState({
        ...state,
        activeChats: [...state.activeChats, { user, chatOpen: true }],
      });
    }
  };

  const closeActiveChat = (id) => {
    setState({
      ...state,
      activeChats: state.activeChats.filter((chat) => chat.user.id !== id),
    });
  };

  const closeAllActiveChats = () => {
    setState({
      ...state,
      activeChats: [],
    });
  };

  //maximize or minimize
  const toggleActiveChat = (id) => {
    const updatedActiveChats = [...state.activeChats];
    const index = updatedActiveChats.findIndex((chat) => chat.user.id === id);
    const updatedActiveChat = {
      ...updatedActiveChats[index],
      chatOpen: !updatedActiveChats[index].chatOpen,
    };
    updatedActiveChats.splice(index, 1, updatedActiveChat);
    setState({
      ...state,
      activeChats: updatedActiveChats,
    });
  };

  return (
    <UserContext.Provider
      value={{
        getAllUsers,
        getSelectedUser,
        activateChat,
        toggleActiveChat,
        closeActiveChat,
        closeAllActiveChats,
        users: state.users,
        error: state.error,
        loading: state.loading,
        selectedUser: state.selectedUser,
        activeChats: state.activeChats,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
