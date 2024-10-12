import React from "react";

const Services = () => {
  return (
    <section id="services" className="my-16" data-aos="fade-up">
      <div className="container mx-auto">
        <h3 className="text-3xl mb-4">My Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-black p-4 rounded-lg hover:bg-glowinglime transition duration-300">
            <h4 className="text-xl font-semibold">Service 1</h4>
            <p>Description of service 1.</p>
          </div>
          {/* Repeat for more services */}
        </div>
      </div>
    </section>
  );
};

export default Services;
