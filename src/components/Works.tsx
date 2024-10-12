import React from "react";

const Works = () => {
  return (
    <section id="works" className="my-16" data-aos="fade-up">
      <div className="container mx-auto">
        <h3 className="text-3xl mb-4">My Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-black p-4 rounded-lg">
            <img
              src="/path-to-your-project-image.jpg"
              alt="Project 1"
              className="w-full h-40 object-cover rounded"
            />
            <h4 className="text-xl font-semibold">Project 1</h4>
            <p>Brief description of the project.</p>
          </div>
          {/* Repeat for more projects */}
        </div>
      </div>
    </section>
  );
};

export default Works;
