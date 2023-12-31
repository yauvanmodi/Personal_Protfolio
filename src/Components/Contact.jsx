import React from "react";
import vg from "../Assets/vg.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, message, email);
    toast.success("Message Sent");
  };
  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <>
      <div id="contact">
        <section>
          <motion.form onSubmit={submitHandler} {...animations.form}>
            <h2>Contact Me</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name..."
              required
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email..."
              required
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message..."
              required
            />
            <motion.button {...animations.button} type="submit">
              Send
            </motion.button>
          </motion.form>
        </section>
        <aside>
          <img src={vg} alt="Graphics" />
        </aside>
      </div>
    </>
  );
};

export default Contact;
