import React from "react";

const Navbar = () => {
  return (
    <>
      
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000"
      >
        <div className="left nav_items">Protiflo</div>
        <div className="right">
          <a href="active" className="nav_items">
            Home
          </a>
          <a href="#about" className="nav_items">
            About
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#project" className="nav_items">
            Project
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>


      
    </>
  );
};
export default Navbar;
