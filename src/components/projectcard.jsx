import React from "react";

const ProjectCard = ({ image, title, description, onViewProject }) => {
    return (
        <div className="pt-20">
               <div className="bg-slate-600 p-4 rounded-lg shadow-lg hover:scale-110 duration-200 ">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl text-black font-bold mb-2 ">{title}</h2>
            <p className="mb-4 h-24">{description}</p>
            <button
                onClick={onViewProject}
                className="py-2 px-4 z-10 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
                View Project
            </button>
        </div>
        </div>
     
    );
};

export default ProjectCard;
