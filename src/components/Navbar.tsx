"use client";
import { useState, useEffect } from "react";
// import Link from "next/link";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Add FaBars and FaTimes for the burger menu
import Image from "next/image";
import logo from "../assets/5logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`custom-cursor ${hovered ? "hovered" : ""}`}
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      ></div>
      <nav className="bg-black p-x-4 p-y-2 sticky top-0 z-50 mb-16">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:text-glowinglime  ps-4"
          >
            <Image src={logo} alt="logo" className="w-full h-16" />

            {/* <h1 className="text-2xl font-bold text-glowinglime">Saif Maamun</h1> */}
          </Link>
          <div className="md:hidden ml:auto me-4">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-white" />
              ) : (
                <FaBars className="text-white" />
              )}
            </button>
          </div>

          <ul
            className={`md:flex space-x-4 ${
              isOpen ? "block" : "hidden"
            } md:block absolute md:static bg-black md:bg-transparent w-full md:w-auto top-16 left-0`}
          >
            <li
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className=" hover:text-glowinglime ms-4 hover:text-shadow-glow"
              >
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="experiences"
                className="hover:text-glowinglime hover:text-shadow-glow"
              >
                Experiences
              </Link>
            </li>
            <li
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="services"
                className="hover:text-glowinglime hover:text-shadow-glow"
              >
                Services
              </Link>
            </li>
            <li
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="skills"
                className="hover:text-glowinglime hover:text-shadow-glow"
              >
                Skills
              </Link>
            </li>
            <li
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="work"
                className="hover:text-glowinglime hover:text-shadow-glow"
              >
                Projects
              </Link>
            </li>
            <li
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="contact"
                className="hover:text-glowinglime hover:text-shadow-glow"
              >
                Contact
              </Link>
            </li>
            <li
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="/path-to-your-resume.pdf"
                download
                className="hidden md:flex items-center hover:text-black hover:shadow-glow hover:bg-glowinglime  rounded-full px-3  transition duration-300"
              >
                {/* <FaFileDownload className="mr-2" /> Resume */}
                <svg
                  width="20px"
                  viewBox="0 0 1024 1024"
                  className="icon me-1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M964.6 202.2L599.8 528.7c-48.4 43.3-121.6 43.3-169.9 0L65 202.2c-19 13.5-31.5 35.5-31.5 60.6v507c0 41.1 33.3 74.4 74.4 74.4h813.6c41.1 0 74.4-33.3 74.4-74.4v-507c0.2-25.1-12.3-47.1-31.3-60.6z"
                    fill="#9DC6AF"
                  />
                  <path
                    d="M921.7 857H108c-48.1 0-87.2-39.1-87.2-87.2v-507c0-28.1 13.8-54.6 36.8-71l8.3-5.9 372.5 333.3c43.6 39 109.3 39 152.8 0l372.5-333.3 8.3 5.9c23.1 16.4 36.8 43 36.8 71v507c0.1 48.1-39 87.2-87.1 87.2zM64.8 219.1c-11.6 11.5-18.3 27.2-18.3 43.7v507c0 34 27.6 61.6 61.6 61.6h813.6c34 0 61.6-27.6 61.6-61.6v-507c0-16.4-6.7-32.2-18.3-43.7L608.4 538.2c-53.3 47.7-133.7 47.7-187 0L64.8 219.1z"
                    fill="#191919"
                  />
                  <path
                    d="M429.9 503.9L65 830.4c12.2 8.6 26.9 13.8 43 13.8h813.6c16.1 0 30.8-5.2 43-13.8L599.8 503.9c-48.4-43.3-121.5-43.3-169.9 0z"
                    fill="#FAFCFB"
                  />
                  <path
                    d="M921.7 857H108c-18.1 0-35.5-5.6-50.4-16.2-3.2-2.3-5.2-5.8-5.4-9.7-0.2-3.9 1.3-7.7 4.2-10.3l364.8-326.5c53.3-47.7 133.7-47.7 187 0L973 820.8c2.9 2.6 4.5 6.4 4.2 10.3-0.2 3.9-2.2 7.5-5.4 9.7-14.6 10.6-32.1 16.2-50.1 16.2zM87.2 827.7c6.6 2.4 13.7 3.7 20.8 3.7h813.6c7.1 0 14.1-1.3 20.8-3.7L591.3 513.4c-43.6-39-109.3-39-152.8 0L87.2 827.7z"
                    fill="#0F0F0F"
                  />
                  <path
                    d="M599.8 579.9l364.8-375.6c-12.2-9.9-26.9-15.9-43-15.9H108c-16.1 0-30.8 6-43 15.9l364.8 375.6c48.5 49.8 121.6 49.8 170 0z"
                    fill="#FAFCFB"
                  />
                  <path
                    d="M514.8 630.1c-34.9 0-68.3-14.6-94.2-41.2L55.9 213.2c-2.5-2.6-3.8-6.1-3.6-9.7 0.2-3.6 1.9-6.9 4.7-9.2 15-12.3 32.7-18.8 51.1-18.8h813.6c18.4 0 36 6.5 51.1 18.8 2.8 2.3 4.5 5.6 4.7 9.2s-1.1 7.1-3.6 9.7L609 588.8c-25.8 26.6-59.3 41.3-94.2 41.3zM85.1 206.5l354 364.5c21 21.6 47.9 33.5 75.8 33.5s54.8-11.9 75.8-33.5l354-364.5c-7.3-3.5-15-5.4-22.9-5.4H108c-7.9 0.1-15.6 1.9-22.9 5.4z"
                    fill="#0F0F0F"
                  />
                  <path
                    d="M260.1 351.7c0-24.6 17.2-44.8 38.2-44.8 21 0 38.2 20.1 38.2 44.8"
                    fill="#FAFCFB"
                  />
                  <path
                    d="M336.6 364.5c-7.1 0-12.8-5.7-12.8-12.8 0-17.3-11.6-32-25.4-32-13.8 0-25.4 14.6-25.4 32 0 7.1-5.7 12.8-12.8 12.8-7.1 0-12.8-5.7-12.8-12.8 0-31.8 22.9-57.6 51.1-57.6 28.2 0 51.1 25.8 51.1 57.6-0.2 7.1-6 12.8-13 12.8z"
                    fill="#0F0F0F"
                  />
                  <path
                    d="M693.1 351.7c0-24.6 17.2-44.8 38.2-44.8 21 0 38.2 20.1 38.2 44.8"
                    fill="#FAFCFB"
                  />
                  <path
                    d="M769.6 364.5c-7.1 0-12.8-5.7-12.8-12.8 0-17.3-11.6-32-25.4-32-13.8 0-25.4 14.6-25.4 32 0 7.1-5.7 12.8-12.8 12.8s-12.8-5.7-12.8-12.8c0-31.8 22.9-57.6 51.1-57.6s51.1 25.8 51.1 57.6c-0.2 7.1-5.9 12.8-13 12.8z"
                    fill="#0F0F0F"
                  />
                  <path
                    d="M419.7 383.4c0 46.3 42.8 84.2 95.1 84.2s95.1-37.9 95.1-84.2v-28.1H419.7v28.1z"
                    fill="#5B5143"
                  />
                  <path
                    d="M514.8 480.4c-59.5 0-108-43.5-108-97v-28.1c0-7.1 5.7-12.8 12.8-12.8H610c7.1 0 12.8 5.7 12.8 12.8v28.1c0 53.5-48.4 97-108 97z m-82.3-112.3v15.3c0 18.7 8.4 36.4 23.6 49.9 15.7 13.9 36.5 21.5 58.7 21.5 22.2 0 43-7.6 58.7-21.5 15.2-13.5 23.6-31.2 23.6-49.9v-15.3H432.5z"
                    fill="#141414"
                  />
                  <path
                    d="M458.6 413a54.7 27.6 0 1 0 109.4 0 54.7 27.6 0 1 0-109.4 0Z"
                    fill="#D39E33"
                  />
                </svg>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
