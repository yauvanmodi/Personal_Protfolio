import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    One: {
      opacity: 0,
      x: "-100%",
    },
    TwoAndThree: {
      opacity: 0,
      y: "-100%",
    },
    Four: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <>
      <div id="services">
        <h2>Services</h2>
        <section>
          <motion.div
            className="serviceBox1"
            whileInView={animations.whileInView}
            initial={animations.One}
          >
            <h3>1+</h3>
            <p>year Experience</p>
          </motion.div>

          <motion.div
            className="serviceBox2"
            whileInView={animations.whileInView}
            initial={animations.TwoAndThree}
          >
            <AiFillIeCircle />
            <span>Web Development</span>
          </motion.div>

          <motion.div
            className="serviceBox3"
            whileInView={animations.whileInView}
            initial={animations.TwoAndThree}
            transition={{delay:0.3}}
          >
            <AiFillAndroid />
            <span>App Development</span>
          </motion.div>

          <motion.div
            className="serviceBox4"
            whileInView={animations.whileInView}
            initial={animations.Four}
          >
            <AiFillWindows />
            <span>Windows Development</span>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Services;
