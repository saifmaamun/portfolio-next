import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20" data-aos="fade-up">
      <div className="container mx-auto">
        <h3 className="text-3xl mb-4">My Skills</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl">JavaScript</h4>
            <div className="bg-gray-300 rounded-full h-2">
              <div
                className="bg-glowinglime h-2 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          {/* Repeat for more skills */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
