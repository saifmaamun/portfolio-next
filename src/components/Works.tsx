"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePortfolio } from "@/app/context/PortfolioContext";
import bulletIcon from "../assets/target-aim-svgrepo-com.svg";

const Works = () => {
  // Fetching data from context
  const { projects } = usePortfolio();

  // Initialize currentIndices as an empty array
  const [currentIndices, setCurrentIndices] = useState<number[]>([]);

  // Detect screen size to conditionally render one or multiple images
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial indices when projects are available
    if (projects && projects.length > 0) {
      setCurrentIndices(projects.map(() => 0)); // Initialize to zero for each project
    }
  }, [projects]); // This effect runs when `projects` changes

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
    if (projects) {
      setCurrentIndices((prevIndices) =>
        prevIndices.map((currentIndex, i) =>
          i === index
            ? (currentIndex + 1) % projects[index].images.length
            : currentIndex
        )
      );
    }
  };

  const handlePrev = (index: number) => {
    if (projects) {
      setCurrentIndices((prevIndices) =>
        prevIndices.map((currentIndex, i) =>
          i === index
            ? currentIndex === 0
              ? projects[index].images.length - 1
              : currentIndex - 1
            : currentIndex
        )
      );
    }
  };

  if (!projects) {
    // Display loading or fallback UI if projects are not available
    return <div>Loading...</div>;
  }

  return (
    <section id="work" className="p-4 md:p-16 bg-black">
      <h2 className="text-4xl text-white font-bold text-start ">My Projects</h2>
      <hr className="border-glowinglime w-2/12 my-8" />
      <div className="space-y-16 ">
        {projects?.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left column for content */}
            <div className="lg:w-1/2 ">
              <h3 className="text-3xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <div className="text-gray-300 mb-6  md:pe-32">
                <ul>
                  {Array.isArray(project.description) ? (
                    project.description.map((item, index) => (
                      <div key={index} className="flex space-x-4 space-y-4">
                        <Image
                          src={bulletIcon}
                          width={30}
                          height={30}
                          alt="bullet point"
                        />
                        <li className="text-gray-300">{item}</li>
                      </div>
                    ))
                  ) : (
                    <li className="text-gray-300">{project.description}</li>
                  )}
                </ul>
              </div>

              {/* Project Links */}
              <div className="flex space-x-4 mb-6">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-glowinglime text-black px-4 py-2 rounded hover:shadow-glow transition"
                >
                  Live
                </a>
                <a
                  href={project.links.front}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-glowinglime text-black px-4 py-2 rounded hover:shadow-glow transition"
                >
                  FrontEnd
                </a>
                <a
                  href={project.links.back}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-glowinglime text-black px-4 py-2 rounded hover:shadow-glow transition"
                >
                  BackEnd
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
                          src={project.images[currentIndices![index]]}
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
                            imageIndex === currentIndices![index]
                              ? "center"
                              : imageIndex ===
                                (currentIndices![index] -
                                  1 +
                                  project.images.length) %
                                  project.images.length
                              ? "left"
                              : imageIndex ===
                                (currentIndices![index] + 1) %
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
                    <div className="flex justify-center items-center relative">
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
                    </div>
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
