"use client";
import { useState, useEffect } from "react";
// import Link from "next/link";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Add FaBars and FaTimes for the burger menu
import Image from "next/image";
import logo from "../assets/5logo.png";
import resumeIcon from "../assets/reapp-svgrepo-com.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const menues = [
    { to: "hero", value: "Home" },
    { to: "experiences", value: "Experiences" },
    { to: "services", value: "Services" },
    { to: "skills", value: "Skills" },
    { to: "work", value: "Projects" },
    { to: "contact", value: "Contact" },
  ];

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
            {menues.map((menu) => (
              <li
                key={menu.value}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Link
                  to={menu.to}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" hover:text-glowinglime ms-4 hover:text-shadow-glow"
                >
                  {menu.value}
                </Link>
              </li>
            ))}

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
                className="hidden md:flex items-center hover:text-black hover:shadow-glow hover:bg-glowinglime  rounded-full px-2  transition duration-300"
              >
                {/* <FaFileDownload className="mr-2" /> Resume */}
                <Image
                  src={resumeIcon}
                  width={20}
                  height={20}
                  alt="resume svg"
                  className="mx-1"
                />
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
