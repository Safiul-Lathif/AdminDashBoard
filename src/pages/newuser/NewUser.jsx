import React from "react";
import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="newuser">
      <h1 className="newusertitle">New User</h1>
      <form className="newuserform">
        <div className="newuseritem">
          <label> Username </label>
          <input type="text" />
        </div>
        <div className="newuseritem">
          <label> Full Name </label>
          <input type="text" />
        </div>

        <div className="newuseritem">
          <label> Email </label>
          <input type="email" />
        </div>
        <div className="newuseritem">
          <label> Password </label>
          <input type="password" />
        </div>
        <div className="newuseritem">
          <label> Phone Number </label>
          <input type="number" />
        </div>
        <div className="newuseritem">
          <label> Adress </label>
          <input type="text" />
        </div>
        <div className="newuseritem">
          <label> Gender </label>
          <div className="newusrtgender">
            <input type="radio" name="gender" id="male" value="male" />
            <label For="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label For="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label For="others">Others</label>
          </div>
        </div>
        <div className="newuseritem">
          <label> photo </label>
          <input type="file" id="img" name="img" accept="image/*" />
        </div>
      </form>
      <input type="submit" className="bu" />
    </div>
  );
}
