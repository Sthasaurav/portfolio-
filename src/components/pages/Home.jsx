import React from "react";
import HeroImage from "../../assets/portfolio/CV.JPG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
    return (
        <div
            name="home"
            className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20"     >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
                <div className="flex flex-col justify-center h-full text-left md:mr-10">
                    <h2 className="text-4xl sm:text-7xl font-bold">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="text-gray-600 py-4 max-w-md">
                        Aspiring Computer and Information Technology professional with robust technical skills in full-stack development and a strong foundation in software engineering principles. Proven experience in developing dynamic web and mobile applications with a keen eye for detail and user-centric design.                    </p>

                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Project
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="relative ">
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="w-60 h-60 md:min-w-96 md:h-96 border-4 border-gray-300 shadow-xl  hover:-backdrop-hue-rotate-90 transition duration-500 mt-[-20px] ml-10 p-1"
                        style={{
                            borderRadius: "31% 69% 71% 29% / 45% 42% 58% 55%  ",
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default Home;
