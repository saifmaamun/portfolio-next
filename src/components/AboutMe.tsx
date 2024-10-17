import React from "react";
import { motion } from "framer-motion";

import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section id="about" className=" py-16">
      <div className="grid grid-cols-1  p-16  gap-8">
        {/* Left Column - About Me Content */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold  text-shadow-glow">About Me</h2>
          <hr className="border-glowinglime w-2/12" />
          <p className="text-lg text-gray-300 leading-relaxed">
            <ul>
              <li>
                I&apos;m a passionate web developer specializing in the MERN
                stack with a love for crafting beautiful, user-friendly
                interfaces.
              </li>
              <li>
                With hands-on experience in building dynamic applications, I
                take pride in writing clean, scalable code.
              </li>
              <li>
                I thrive in fast-paced environments, always learning new
                technologies and pushing the boundaries of web development.
              </li>
            </ul>
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Over the years, I&apos;ve built everything from full-stack
            applications to intuitive user experiences. My focus remains on
            delivering high-quality solutions that solve real-world problems.
          </p>
        </motion.div>

        {/* Right Column - Skills or Image */}
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.button>
          <Link
            href="/resume.pdf"
            className=" md:flex items-center font-bold hover:text-white text-black shadow-glow hover:bg-black bg-glowinglime  rounded-full py-2 px-4  transition duration-300"
          >
            Download Resume
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutMe;
