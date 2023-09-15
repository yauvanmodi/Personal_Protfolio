import React from "react";
import img1 from "../Assets/images.jpeg";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <img src={img1} alt="Founder" />
          <h2>Y@A-PORTFOLIO.</h2>
        </div>
        <aside>
          <h2>Media</h2>
          <article>
            <a href="https://youtube.com" target={"blank"}>
              <AiFillYoutube />
            </a>
            <a href="https://instagram.com/yauvan_98" target={"blank"}>
              <AiFillInstagram />
            </a>
            <a href="https://github.com/yauvan modi" target={"blank"}>
              <AiFillGithub />
            </a>
          </article>
        </aside>
        <a href="#home">
          <AiOutlineArrowUp />
        </a>
      </footer>
    </>
  );
};

export default Footer;
