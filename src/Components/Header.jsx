import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>
    </>
  );
};

const NavContent = () => (
  <>
    <h3>Y@A-PORTFOLIO</h3>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#timeline">Experience</a>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:official.yauvan.m@inheritx.com">
      <button>Email</button>
    </a>
  </>
);
export default Header;
