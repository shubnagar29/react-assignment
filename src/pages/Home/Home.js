import React, { useContext, useEffect } from "react";
import "./Home.css";
//components
import UserDetail from "../../components/HomePage/UserDetail/UserDetail";
import Loader from "../../components/Common/Loader/Loader";

import { UserContext } from "../../context/UserContext";
import backgroundSvg from "../../images/background.svg";

const Home = ({ history }) => {
  const context = useContext(UserContext);
  const { getAllUsers, users, loading, getSelectedUser } = context;

  useEffect(() => {
    // calling users api
    getAllUsers();
  }, []);

  const handleClick = (id) => {
    getSelectedUser(id);
    history.push(`/profile/${id}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="home-container">
          <div className="background-svg-1">
            <img src={backgroundSvg} alt="svg" />
          </div>
          <div className="background-svg-2">
            <img src={backgroundSvg} alt="svg" />
          </div>
          <div className="users-card">
            <div className="users-card-title">
              <p>Select an Account</p>
            </div>
            <div className="users">
              {users &&
                users.map((user) => (
                  <UserDetail
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    image={user.profilepicture}
                    handleClick={handleClick}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
