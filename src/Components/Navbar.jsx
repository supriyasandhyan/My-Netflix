import React from "react";
import "../CSS/Nav.css";
import logoo from "../Images/logoo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <img src={logoo} width={100}/>
      </div>
      <div className="nav-content">
        <div>
          <span className="spann">UNLIMITED TV SHOWS & MOVIES</span>
        </div>
        <div>
          <button className="JOINbtn">JOIN NOW</button>
        </div>
        <div>
          <button className="OUTbtn">SIGN OUT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
