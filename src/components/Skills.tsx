import { useState } from "react";
import { motion } from "framer-motion";
import { skillsData, skillsDetails } from "@/infoSet/skills";
import Image from "next/image";
const sections = ["Frontend", "Backend", "Database", "Tools"];

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
  experience: number;
  projects: number;
  proficiency: string;
  position: { top: string; left: string };
};

type Section = keyof typeof skillsDetails;

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("Frontend");

  return (
    <section id="skills" className="py-36">
      <div className="p-16">
        <div className="skills-section flex flex-col md:flex-row items-center justify-center md:justify-between lg:min-h-screen md:min-h-screen">
          {/* Left Side -  Skill info*/}
          <div className="relative w-full md:w-1/2 h-96 order-1 md:order-2 flex justify-center items-center">
            <div className="floating-icons relative w-[400px] h-[400px]">
              {skillsData.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="absolute skill-icon"
                  style={{
                    top: skill.position.top,
                    left: skill.position.left,
                  }}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onHoverStart={() => setSelectedSkill(skill)}
                  onHoverEnd={() => setSelectedSkill(null)}
                >
                  <Image
                    src={skill.icon}
                    width={50}
                    height={50}
                    alt="skill icon"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Skill icons */}
          <div className="skill-info w-full md:w-1/2 order-2 md:order-1  text-center md:text-left">
            {/* If hovering over a skill, show its info; else show default */}
            {selectedSkill ? (
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-3xl font-bold text-glowinglime">
                  {selectedSkill.name}
                </h3>
                <hr className="border-glowinglime mt-4 w-1/4" />
                <p className="text-lg mt-4">{selectedSkill.description}</p>
                <p className="mt-2">
                  Experience: {selectedSkill.experience} years
                </p>
                <p className="mt-2">Projects: {selectedSkill.projects}+</p>
                <p className="mt-2">Proficiency: {selectedSkill.proficiency}</p>
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h3 className="text-4xl font-bold text-white mb-6">
                    My Skills
                  </h3>
                  <hr className="border-glowinglime w-4/12 my-8" />
                  <p className="text-lg text-gray-300 mb-8">
                    I am a full-stack developer with expertise in several
                    technologies across frontend, backend, databases, and tools.
                    Below is a summary of my skills.
                  </p>
                </motion.div>

                {/* Buttons for different sections */}
                <div className="relative mb-6 flex justify-center md:justify-start gap-8">
                  {sections.map((section) => (
                    <motion.button
                      key={section}
                      className={`text-lg font-semibold ${
                        activeSection === section
                          ? "text-glowinglime"
                          : "text-gray-400"
                      } relative`}
                      onClick={() => setActiveSection(section as Section)}
                      whileHover={{ color: "#39FF14" }}
                    >
                      {section}
                      {/* Active Underline Indicator */}
                      {activeSection === section && (
                        <motion.div
                          className="underline"
                          layoutId="underline"
                          initial={false}
                          animate={{
                            width: "100%",
                            height: 2,
                            backgroundColor: "#39FF14",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Detailed Info of the Selected Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-glowinglime">
                    {skillsDetails[activeSection].title}
                  </h3>
                  <p className="text-gray-300 mt-4">
                    {skillsDetails[activeSection].description}
                  </p>
                  <div className="mt-6">
                    {skillsDetails[activeSection].technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex justify-between bg-gray-800 p-4 rounded-md mb-2"
                      >
                        <span className="font-semibold text-glowinglime">
                          {tech.name}
                        </span>
                        <span className="text-gray-300">{tech.details}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
