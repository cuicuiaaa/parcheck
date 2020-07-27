import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";

function Nav() {
  const location = useLocation();
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/streets" className={location.pathname === "/" ? "nav-link active" : "nav-link active"}>
          ParCheck
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link"
        >
          My Parking
        </Link>
      </li> */}
    </ul>
  );
}

export default Nav;
