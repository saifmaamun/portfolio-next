"use client";
import { experiences } from "@/infoSet/experience";
import { motion } from "framer-motion";
import bulletPoint from "../assets/ar-svgrepo-com.svg";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="py-36">
      <div className="p-4  md:p-16">
        <h2 className="text-left text-4xl text-glowinglimetext-shadow-glow font-bold mb-6">
          Experience
        </h2>
        <hr className="border-glowinglime w-2/12" />
        <div className="relative border-l border-gray-600 max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute w-4 h-4 bg-[#28f0b4] rounded-full -left-2 border border-black"></div>
              <div className="pl-6">
                <h3 className="text-2xl font-semibold text-white">
                  {experience.title}
                </h3>
                <span className="block text-sm text-gray-400">
                  {experience.company}
                </span>
                <span className="block text-sm text-gray-400">
                  {experience.duration}
                </span>
                <span className="block text-sm text-gray-400">
                  {experience.servedTime}
                </span>
                {experience.description.map((activity) => (
                  <div
                    key={activity}
                    className="flex justify-start items-center space-x-4 my-2 py-2"
                  >
                    <Image
                      src={bulletPoint}
                      className=""
                      alt="arrow"
                      width={30}
                      height={30}
                    />

                    <p className="mt-2 text-gray-300 ">{activity}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
