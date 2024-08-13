import React, { useState } from "react";
import ProjectCard from "../projectcard";
import TipCalculator from "../projects/TipCalculator/TipCalculator";
import tipcalImage from "../../assets/portfolio/tipcal.png"; // Import the image


const Project = () => {
  const [showTipCalculator, setShowTipCalculator] = useState(false);

  const handleViewProject = () => {
    setShowTipCalculator(true);
  };

  const projects = [
    {
      image:tipcalImage,
      title: "Bill Split",
      description: "A React and Tailwind CSS Tip Calculator for calculating and splitting bill amounts, tips, and taxes among multiple people.",
      link: "https://link-to-project-one.com",
    },
    {
      image: "path/to/image2.jpg",
      title: "Project Two",
      description: "A brief description of Project Two.",
      link: "https://link-to-project-two.com",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      {showTipCalculator ? (
        <TipCalculator />
      ) : (
        <div
          name="portfolio"
          className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center py-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-screen-lg mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                onViewProject={handleViewProject}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
