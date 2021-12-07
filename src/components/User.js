import React, { useState } from "react";
import "./User.css";
import Address from "./Address";

function User({ email, first_name, last_name, image }) {
  const [show, setShow] = useState(false);

  function showAddress() {
    setShow(true);
  }
  return (
    <>
      <div className="user">
        <div className="user__container">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="user__card">
            <span> Email:- </span>
            {email}
            <div>
              <span> First Name:- </span>
              {first_name}
              <div>
                <span> Last Name:- </span>
                {last_name}
              </div>
              {show && <Address />}
              <button onClick={showAddress}>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default User;
