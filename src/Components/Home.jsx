import React from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import me from "../Assets/images1.jpeg";
import { useRef } from "react";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (value) => (clientCount.current.textContent = value.toFixed()),
    });
  };

  const animationProjectCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (value) => (projectCount.current.textContent = value.toFixed()),
    });
  };

  const animations = {
    h1: {
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
    },
  };
  return (
    <>
      <div id="home">
        <section>
          <div>
            <motion.h1 {...animations.h1}>
              Hi, I Am <br /> Yauvan.
            </motion.h1>

            <Typewriter
              options={{
                strings: ["A Developer", "A Designer", "A Creator"],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara",
              }}
            />

            <div>
              <a href="mailto:official.yauvan.m@inheritx.com">Hire Me</a>
              <a href="#work">
                Projects <BsArrowRight />
              </a>
            </div>

            <article>
              <p>
                +
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              </p>
              <span>Clients Worldwide</span>
            </article>

            <aside>
              <article>
                <p>
                  +
                  <motion.span
                    whileInView={animationProjectCount}
                    ref={projectCount}
                  ></motion.span>
                </p>
                <span>Projects Made</span>
              </article>

              <article data-special>
                <p>Contact</p>
                <span>official.yauvan.m@inheritx.com</span>
              </article>
            </aside>
          </div>
        </section>
        <section>
          <img src={me} alt="Yauvan" />
        </section>
      </div>
    </>
  );
};

export default Home;
