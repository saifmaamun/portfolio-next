import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Web Development",
    description:
      "I create responsive and dynamic websites using modern technologies.",
  },
  {
    title: "Frontend Development",
    description:
      "I specialize in building interactive UIs with React,Redux, Next and TypeScript.",
  },
  {
    title: "Backend Development",
    description:
      "I develop robust backend systems using Node.js, Express.js, MongoDB, and Mongoose.",
  },
  {
    title: "API Integration",
    description:
      "I integrate APIs for smooth data exchange and efficient functionality.",
  },
  {
    title: "Full-Stack Development",
    description:
      "I handle both frontend and backend to deliver end-to-end solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-36" data-aos="fade-up">
      <h2 className="text-left text-4xl text-white text-shadow-glow mb-4 font-bold">
        Services
      </h2>
      <div className="services-section py-16 bg-gray-900 rounded-2xl text-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-glowinglime">
          What I Offer
        </h2>
        <p className="text-lg text-center text-gray-300 mb-8">
          As a web developer, I offer a range of services to build, maintain,
          and scale web applications. Here&apos;s what you can expect when
          working with me.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card relative p-6 rounded-lg bg-gray-800 shadow-lg w-80 cursor-pointer transform transition-all duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>

              {/* Hover overlay for glowing effect */}
              <div className="absolute inset-0 bg-glowinglime opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
