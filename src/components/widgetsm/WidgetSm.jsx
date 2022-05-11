import { Visibility } from "@mui/icons-material";
import React from "react";
import "./WidgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetsm">
      <span className="widgetsmtitle">New Join Members</span>
      <ul className="widgetsmlist">
        <li className="widgetsmlistitm">
          <img src="./image/s.png" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Salman</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>

        <li className="widgetsmlistitm">
          <img src="./image/r.png" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Rasheed</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>
        <li className="widgetsmlistitm">
          <img src="./image/a.jpg" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">afi</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>
        <li className="widgetsmlistitm">
          <img src="./image/s.jpg" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">imran</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>
        <li className="widgetsmlistitm">
          <img src="./image/ah.png" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Ahsan</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>
      </ul>
    </div>
  );
}
