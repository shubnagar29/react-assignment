import React from "react";
import "./SelectedUserDetails.css";

//component
import AddressMap from "../AddressMap/AddressMap";

//display selected user data coming from api
const SelectedUserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <div className="personal-details">
        <img
          src={user.profilepicture}
          alt={user.name}
          width="170"
          height="170"
        />
        <h3>{user.name}</h3>
        <div className="personal-details-content">
          <div>
            <p>username</p>
            <span>:</span>
            <p>{user.username}</p>
          </div>
          <div>
            <p>email</p>
            <span>:</span>
            <p>{user.email}</p>
          </div>
          <div>
            <p>phone</p>
            <span>:</span>
            <p style={{ fontSize: "14px" }}>{user.phone}</p>
          </div>
          <div>
            <p>website</p>
            <span>:</span>
            <p>{user.website}</p>
          </div>
        </div>
        <hr className="personal-details-hr" />
        <div className="company-details">
          <h3>Company</h3>
          <div className="company-details-content">
            <div>
              <p>name</p>
              <span>:</span>
              <p>{user.company.name}</p>
            </div>
            <div>
              <p>catchphrase</p> <span>:</span>{" "}
              <p>{user.company.catchPhrase}</p>
            </div>
            <div>
              <p>bs</p>
              <span>:</span>
              <p>{user.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ opacity: "0.6" }} />
      <div className="address-details">
        <h3>Address</h3>
        <div className="address-details-content">
          <div>
            <p>street</p>
            <span>:</span>
            <p>{user.address.street}</p>
          </div>
          <div>
            <p>suite</p>
            <span>:</span>
            <p>{user.address.suite}</p>
          </div>
          <div>
            <p>city</p>
            <span>:</span>
            <p>{user.address.city}</p>
          </div>
          <div>
            <p>zipcode</p>
            <span>:</span>
            <p>{user.address.zipcode}</p>
          </div>
        </div>
        <AddressMap lat={user.address.geo.lat} lng={user.address.geo.lng} />
      </div>
    </div>
  );
};

export default SelectedUserDetails;
