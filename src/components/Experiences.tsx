"use client";
import { motion } from "framer-motion";

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  duration: string;
  servedTime: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2024",
    title: "Senior Web Developer",
    company: "Microsoft Corporation",
    duration: "2022-2024",
    servedTime: "2 years",
    description:
      "Worked on advanced MERN stack projects and deployed scalable applications.",
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "Meteor Inc",
    duration: "2018-2022",
    servedTime: "2 years",
    description:
      "Developed web applications with Next.js, Node.js, and MongoDB.",
  },
  // Add more experiences as needed
];

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="py-36">
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
            <div className="absolute w-4 h-4 bg-[#39ff14] rounded-full -left-2 border border-black"></div>
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
              <p className="mt-2 text-gray-300">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
