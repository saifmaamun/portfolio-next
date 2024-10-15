import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Works = () => {
  // Sample project data
  interface Project {
    title: string;
    description: string;
    links: {
      github: string;
      demo: string;
    };
    images: string[]; // Array of string image URLs
  }

  const projects: Project[] = [
    {
      title: "Project 1",
      description:
        "An overview of Project 1 with its features and functionalities.",
      links: {
        github: "https://github.com/user/project1",
        demo: "https://project1.com",
      },
      images: [
        "https://i.ibb.co/tzZGCYh/gamespace.png",
        "https://i.ibb.co/L6Gb9g7/donation.png",
        "https://i.ibb.co/tzZGCYh/gamespace.png",
      ],
    },
    {
      title: "Project 2",
      description:
        "An overview of Project 2, showcasing its unique functionalities.",
      links: {
        github: "https://github.com/user/project2",
        demo: "https://project2.com",
      },
      images: [
        "https://i.ibb.co/L6Gb9g7/donation.png",
        "https://i.ibb.co/tzZGCYh/gamespace.png",
        "https://i.ibb.co/L6Gb9g7/donation.png",
      ],
    },
    {
      title: "Project 3",
      description: "A detailed overview of Project 3 and its features.",
      links: {
        github: "https://github.com/user/project3",
        demo: "https://project3.com",
      },
      images: [
        "https://i.ibb.co/tzZGCYh/gamespace.png",
        "https://i.ibb.co/L6Gb9g7/donation.png",
        "https://i.ibb.co/tzZGCYh/gamespace.png",
      ],
    },
  ];

  // Carousel State
  const [currentIndices, setCurrentIndices] = useState(projects.map(() => 0));

  // Detect screen size to conditionally render one or multiple images
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust for mobile screen (<= 768px)
    };

    // Initial check
    handleResize();

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = (index: number) => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((currentIndex, i) =>
        i === index
          ? (currentIndex + 1) % projects[index].images.length
          : currentIndex
      )
    );
  };

  const handlePrev = (index: number) => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((currentIndex, i) =>
        i === index
          ? currentIndex === 0
            ? projects[index].images.length - 1
            : currentIndex - 1
          : currentIndex
      )
    );
  };

  return (
    <section id="work" className="p-16 bg-black">
      <h2 className="text-4xl text-white font-bold text-start ">My Projects</h2>
      <hr className="border-glowinglime w-2/12 my-8" />
      <div className="space-y-16 py-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left column for content */}
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>

              {/* Project Links */}
              <div className="flex space-x-4 mb-6">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-glowinglime text-black px-4 py-2 rounded hover:shadow-glow transition"
                >
                  GitHub
                </a>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-glowinglime text-black px-4 py-2 rounded hover:shadow-glow transition"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Right column for images */}
            <div className="lg:w-1/2 relative">
              <div className="carousel-container">
                <h3 className="project-title">{project.title}</h3>
                <div className="carousel-content">
                  <div className="carousel-slide-container flex space-x-4">
                    {/* Conditionally render images based on screen size */}
                    {isMobile ? (
                      <div className={`carousel-slide center`}>
                        <Image
                          src={project.images[currentIndices[index]]}
                          alt={project.title}
                          className="carousel-img"
                          width={300}
                          height={300}
                          onClick={() =>
                            console.log("Open modal for full screen")
                          }
                        />
                      </div>
                    ) : (
                      // Show all images side-by-side on larger screens
                      project.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className={`carousel-slide ${
                            imageIndex === currentIndices[index]
                              ? "center"
                              : imageIndex ===
                                (currentIndices[index] -
                                  1 +
                                  project.images.length) %
                                  project.images.length
                              ? "left"
                              : imageIndex ===
                                (currentIndices[index] + 1) %
                                  project.images.length
                              ? "right"
                              : ""
                          }`}
                        >
                          <Image
                            src={image}
                            alt={project.title}
                            className="carousel-img"
                            width={300}
                            height={300}
                            onClick={() =>
                              console.log("Open modal for full screen")
                            }
                          />
                        </div>
                      ))
                    )}
                  </div>

                  {/* Carousel Control Buttons (only needed in mobile view) */}
                  {isMobile ? (
                    <>
                      <button
                        className="carousel-button prev"
                        onClick={() => handlePrev(index)}
                      >
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14M5 12l4-4m-4 4 4 4"
                          />
                        </svg>
                      </button>
                      <button
                        className="carousel-button next"
                        onClick={() => handleNext(index)}
                      >
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="carousel-button prev"
                        onClick={() => handlePrev(index)}
                      >
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14M5 12l4-4m-4 4 4 4"
                          />
                        </svg>
                      </button>
                      <button
                        className="carousel-button next"
                        onClick={() => handleNext(index)}
                      >
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
