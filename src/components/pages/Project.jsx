import React, { useState } from "react";
import ProjectCard from "../projectcard";
import TipCalculator from "../projects/TipCalculator/TipCalculator";
import tipcalImage from "../../assets/portfolio/tipcal.png";
import InstaImage from "../../assets/portfolio/Insta.png";
import FlutterImage from "../../assets/portfolio/Flutter.png";
import CarRental from "../../assets/portfolio/carrental.png";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewProject = (project) => {
    if (project.link) {
      // Navigate to the link
      window.open(project.link, "_blank"); // Opens in a new tab
    } else if (project.component) {
      // Render the component
      setSelectedProject(project.component);
    }
  };

  const projects = [
    {
      image: tipcalImage,
      title: "Bill Split",
      description: "A React and Tailwind CSS Tip Calculator for calculating and splitting bill amounts, tips, and taxes among multiple people.",
      component: <TipCalculator />, // Set the component here
    },
    {
      image: FlutterImage,
      title: "Car Rental Mobile App",
      description: "A Car Rental Mobile Application created using Flutter and Firebase with an intuitive UI.",
      link: "https://github.com/Sthasaurav/carrental", // Set the link here
    },
    {
      image: InstaImage,
      title: "Instagram Clone Project",
      description: "A clone website of Instagram created using HTML and CSS.",
      link: "/InstaClone/home.html", // Set the ltsink here
    },
    {
      image: CarRental,
      title: "Car Rental Website",
      description: "A Car Rental website created using HTML, CSS, and JavaScript.",
      link: "/car rental/mian.html"
      // Set another component here
    },
    // Add more projects as needed
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center py-8">
      {selectedProject ? (
        selectedProject
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-screen-lg mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              onViewProject={() => handleViewProject(project)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
