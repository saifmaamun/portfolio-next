"use client";
import Image from "next/image";
import mail from "../assets/gmail-svgrepo-com.svg";
import phone from "../assets/phone-svgrepo-com.svg";
import whatsapp from "../assets/whatsapp-svgrepo-com.svg";
import address from "../assets/location-svgrepo-com.svg";
import git from "../assets/github-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import insta from "../assets/instagram-1-svgrepo-com.svg";
import fb from "../assets/facebook-media-network-svgrepo-com.svg";
import x from "../assets/x.svg";

const Footer: React.FC = () => {
  const socials = [
    {
      icon: git,
      handle: "@saifmaamun",
      href: "https://github.com/saifmaamun",
    },
    {
      icon: linkedin,
      handle: "@saifmaamun",
      href: "https://github.com/saifmaamun",
    },
    {
      icon: insta,
      handle: "@saifmaamun",
      href: "https://github.com/saifmaamun",
    },
    {
      icon: fb,
      handle: "@saifmaamun",
      href: "https://github.com/saifmaamun",
    },
    {
      icon: x,
      handle: "@saifmaamun",
      href: "https://github.com/saifmaamun",
    },
  ];
  const contacts = [
    {
      src: mail,
      value: "saifmaamun@gmail.com",
      href: "mailto:saifmaamun@gmail.com",
    },
    {
      src: phone,
      value: "+8801305797595",
      href: "tel:+8801305797595",
    },
    {
      src: whatsapp,
      value: "+8801305797595",
      href: "tel:+8801305797595",
    },
    {
      src: address,
      value: "Siddhirgonj, Narayangonj, Dhaka,Bangladesh",
      href: "",
    },
  ];
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">Get In Touch</h4>
          <hr className="border-glowinglime" />
          <p className="text-gray-400">
            Feel free to contact me via email or connect on my social media
            channels. Let&apos;s collaborate and build something great!
          </p>
          {contacts.map((contact) => (
            <div key={contact.value} className="text-lg">
              <div className="flex justify-start items-center space-x-4">
                <Image
                  src={contact.src}
                  className=""
                  alt="My SVG Icon"
                  width={40}
                  height={40}
                />

                <a
                  href={contact.href}
                  className="hover:text-glowinglime transition-all duration-300"
                >
                  {contact.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">Quick Links</h4>
          <hr className="border-glowinglime" />
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-glowinglime transition-all duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-glowinglime transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-glowinglime transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-glowinglime transition-all duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-glowinglime transition-all duration-300"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold  text-white">Connect With Me</h4>
          <hr className="border-glowinglime" />
          <div className="flex-col space-y-2 align-middle it">
            {socials.map((social) => (
              <a
                key={social.handle}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-glowinglime transition-all duration-300"
              >
                <Image
                  src={social.icon}
                  className=""
                  alt="My SVG Icon"
                  width={40}
                  height={40}
                />
                <p>{social.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Saifur Rahman. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
