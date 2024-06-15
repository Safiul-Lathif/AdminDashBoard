import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="usertitlecontainer">
        <h1 className="usertitle">Edit User</h1>
        <Link to="/newuser">
          <button className="useraddbutton">Create</button>
        </Link>
      </div>
      <div className="usercontainer">
        <div className="usershow">
          <div className="usershowtop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="toptiitlr">
              <span className="usershowname">Safi</span>
              <span className="usershowtitle"> Software Engineer</span>
            </div>
          </div>
          <div className="usershowbottom">
            <span className="showtitle">Account Details</span>
            <div className="info">
              <PermIdentity className="icon" />
              <span className="infotitle">Safiul Lathif</span>
            </div>
            <div className="info">
              <CalendarToday className="icon" />
              <span className="infotitle">30.07.2001</span>
            </div>
            <span className="showtitle">Contact Details</span>

            <div className="info">
              <PhoneAndroid className="icon" />
              <span className="infotitle">+91 7868920541</span>
            </div>
            <div className="info">
              <MailOutline className="icon" />
              <span className="infotitle">safi@gmail.com</span>
            </div>
            <div className="info">
              <LocationSearching className="icon" />
              <span className="infotitle">Tamilnadu | India</span>
            </div>
          </div>
        </div>
        <div className="userupdate">
          <span className="updatetitle">Edit</span>
          <form className="updateform">
            <div className="updateleft">
              <div className="updateitem">
                <label> Username</label>
                <input
                  type={"text"}
                  placeholder={"Safi"}
                  className={"updateinput"}
                />
              </div>
              <div className="updateitem">
                <label> Full name</label>
                <input
                  type={"text"}
                  placeholder={"Safiul Lathif"}
                  className={"updateinput"}
                />
              </div>
              <div className="updateitem">
                <label> email</label>
                <input
                  type={"email"}
                  placeholder={"safi@gmail.com"}
                  className={"updateinput"}
                />
              </div>
              <div className="updateitem">
                <label> DOB</label>
                <input
                  type={"date"}
                  placeholder={"30.07.2001"}
                  className={"updateinput"}
                />
              </div>
              <div className="updateitem">
                <label> phone number</label>
                <input
                  type={"number"}
                  placeholder={"+91 7868920541"}
                  className={"updateinput"}
                />
              </div>
              <div className="updateitem">
                <label> adress </label>
                <input
                  type={"text"}
                  placeholder={"Tamilnadu | India"}
                  className={"updateinput"}
                />
              </div>
            </div>
            <div className="updateright">
              <div className="updateuplode">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="updateimage"
                />
                <label htmlFor="file">
                  <Publish className="sss" />{" "}
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="updatebutton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
