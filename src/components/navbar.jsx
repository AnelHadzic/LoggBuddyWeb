import React from "react";
import icon from "/images/LoggText.png";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center">
        <img
          src={icon}
          alt="Logo"
          className="d-inline-block align-text-center"
        />
      </div>
    </nav>
  );
}

export default Navbar;
