import React from "react";

const ProjectCard = ({ image, title, description, onViewProject }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-black">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <button
        onClick={onViewProject}
        className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;
