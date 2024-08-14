import React from "react";
import HeroImage from "../../assets/portfolio/CV.JPG";


const About = () => {
    return (
        <div
            name="about"
            className="w-full flex min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20 pb-16"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About Me
                    </p>
                </div>

                <p className="text-xl mt-0">
                    Hi, I’m Saurav Shrestha, an aspiring Full Stack Developer with a passion for creating dynamic and user-friendly applications. I am currently pursuing a Bachelor of Science in Computer and Information Technology (BSc. CSIT) from NIST College Banepa, Kavre, and will graduate in June 2024.
                </p>

                <p className="text-xl mt-4">
                    My journey in web development began with a fascination for programming and technology. Over the years, I have developed a strong foundation in software engineering principles and a keen interest in full-stack development. I have hands-on experience in various programming languages, including C++, JavaScript, and Dart, and I’m proficient in web technologies like HTML, CSS, Tailwind, and React, as well as mobile development with Flutter.
                </p>

           
                

                <p className="text-xl mt-4">
                    In addition to my technical skills, I am actively involved in various training programs and have received certifications from Microsoft Learn, Developer Student Clubs, and Devtown. My interests include reading, chess, traveling, movies, and music. I am eager to apply my skills in a professional setting and contribute to innovative projects.
                </p>

                <p className="text-xl mt-4">
                    Feel free to reach out to me if you have any opportunities or collaborations in mind. I am always excited to connect with like-minded professionals and explore new challenges.
                </p>

                <div className="mt-8">
                    <p className="text-xl font-bold">Contact Information:</p>
                    <p className="text-xl">Phone: 9813615835</p>
                    <p className="text-xl">Email: sthasaurav57@gmail.com</p>
                </div>
            </div>
            <div className="relative pt-12 pr-7 ">
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="w-40 h-40 md:min-w-64  md:h-64 border-4 border-gray-300 shadow-xl  hover:-backdrop-hue-rotate-90 transition duration-500 mt-[-20px] ml-10 p-1"
                        style={{
                            borderRadius: "31% 69% 71% 29% / 45% 42% 58% 55%  ",
                        }}
                    />
                </div>
        </div>
    );
};

export default About;
