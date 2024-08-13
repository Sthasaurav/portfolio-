import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20 pb-16"
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
                    Here are some of the key projects I’ve worked on:
                </p>

                <ul className="list-disc pl-6 mt-4">
                    <li>
                        <strong>Car Rental Application:</strong> Developed with Flutter and Firebase. This app features secure user login, profile management, and real-time database integration, resulting in improved user engagement and streamlined administrative tasks.
                    </li>
                    <li>
                        <strong>Instagram Clone:</strong> Created using HTML, CSS, Tailwind, and JavaScript. This project highlights my frontend skills with a responsive design and intuitive user interactions.
                    </li>
                    <li>
                        <strong>Car Rental Website:</strong> Engineered with HTML, CSS, Tailwind, and JavaScript, focusing on a visually appealing interface and seamless navigation.
                    </li>
                </ul>

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
        </div>
    );
};

export default About;
