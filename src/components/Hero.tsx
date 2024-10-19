"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import resumeIcon from "../assets/reapp-svgrepo-com.svg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row  items-center text-white  justify-between  py-36"
    >
      {/* Left content */}
      <div className="md:w-1/2 p-2 ">
        <motion.h1
          className="text-5xl md:text-7xl font-bold  mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I&apos;m
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl font-semibold text-glowinglime  mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Saifur Rahman
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-medium text-gray-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Typewriter effect for developer skills */}
          <Typewriter
            words={[
              "A Web Developer",
              "A JavaScript Developer",
              "A React Developer",
              "A MERN Stack Developer",
              "A Frontend Enthusiast",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>
        <motion.button>
          <div className="flex justify-center space-x-1  items-center font-bold  text-black bg-white hover:shadow-glow rounded-full py-3 px-4  transition duration-300">
            <Image src={resumeIcon} width={20} height={20} alt="resume svg" />
            <Link
              href="https://drive.google.com/file/d/1u_-U1Iy-dMqy8n936y9MVX9DXH77PBk0/view?usp=sharing"
              className=" "
            >
              Resume
            </Link>
          </div>
        </motion.button>
      </div>

      {/* Right image */}
      <motion.div
        className="relative  md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <Image
            src="https://i.ibb.co.com/TcG3NN0/rsz-img.png" // Update this path to your image
            alt="Saif Maamun"
            width={400}
            height={400}
            className="rounded-b-full bg-opacity-20 object-cover"
          />
          {/* Background shapes */}

          <motion.div
            className="absolute -z-10 w-64 h-64 sm:w-80 sm:h-80  bg-glowinglime rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
            style={{ top: "10%", left: "10%" }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -z-10 w-64 h-64 sm:w-64 sm:h-64 bg-glowinglime  rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
            style={{ top: "30%", left: "13%" }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
