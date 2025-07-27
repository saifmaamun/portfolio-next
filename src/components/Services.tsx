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
      <div className="services-section p-4 md:p-16  text-white">
        <h2 className="text-4xl font-bold text-start mb-8 text-white">
          What I Offer
        </h2>
        <hr className="border-glowinglime w-2/12 my-8" />
        <p className="text-lg text-start text-gray-300 mb-8">
          As a web developer, I offer a range of services to build, maintain,
          and scale web applications. Here&apos;s what you can expect when
          working with me.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card relative p-6 rounded-lg bg-gray-800 shadow-lg w-80 cursor-pointer transform transition-all duration-500"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: index * 0.4,
              }}
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
