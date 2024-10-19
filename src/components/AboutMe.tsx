/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";

import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section id="about" className=" py-16">
      <div className="grid grid-cols-1 p-4 md:p-16  gap-8">
        {/* Left Column - About Me Content */}
        <motion.div
          className="flex flex-col justify-center space-y-6 transform transition-all duration-500"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold  text-shadow-glow">About Me</h2>
          <hr className="border-glowinglime w-2/12" />
          <p className="text-lg text-gray-300 leading-relaxed space-y-4">
            <ul className="space-y-4">
              <li>
                Hi, I'm Saif, a passionate web developer and lifelong gamer from
                Bangladesh. I find joy in solving complex coding challenges and
                constantly pushing my limits to learn new technologies. Whether
                it's building seamless web applications or leveling up in my
                favorite game, my determination to succeed never wavers.
              </li>
              <li>
                As a MERN stack developer, I thrive on creating efficient,
                scalable solutions, and I take pride in my attention to detail.
                My love for gaming has taught me the importance of strategy,
                patience, and persistence, all of which I apply in my coding
                journey.
              </li>
              <li>
                Driven by curiosity and a desire to improve, I believe in
                continuous growth, both professionally and personally. Whether
                it's mastering a new framework or completing a difficult level
                in a game, I am always ready to take on the challenge. Let's
                build something amazing together!
              </li>
            </ul>
          </p>
        </motion.div>

        {/* Right Column - Skills or Image */}
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.button>
          <Link
            href="#contact"
            className=" md:flex items-center font-bold hover:text-white text-black shadow-glow hover:bg-black bg-glowinglime  rounded-full py-2 px-4  transition duration-300"
          >
            Hire Me
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutMe;
