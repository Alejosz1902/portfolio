import React from "react";
import profilepic from "../assets/profilepic.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";


const Jumbotron = () => {

    const handleEmail = () => {
        Swal.fire({
            title: "Email copied to clipboard",
            icon: "success",
            timer: 5000,
            timerProgressBar: true,
        });
        navigator.clipboard.writeText("alejandro.sz96@hotmail.com");
    }

    return (
        <div className="flex flex-col-reverse w-full md:w-3/5 mx-auto md:flex-row justify-center items-center text-white mt-0 md:mt-24 py-4 px-8">
            <div className="flex flex-col w-full md:w-3/4 text-left mt-2">
                <h1 className="text-4xl md:text-6xl mt-8 mb-2">Alejandro Sanchez</h1>
                <h2 className="text-2xl md:text-4xl text-lightBlue">Full Stack Developer</h2>
                <p className="mt-6 md:mt-12 md:w-4/5 text-white text-xl">
                    I’m Alejandro Sanchez, a developer skilled in React, JavaScript and Python, with hands-on experience connecting front-end and back-end components. I’m excited to bring my skills to a frontend development role and grow with a dynamic team. Let’s connect!
                </p>
                <div className="flex flex-col items-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:w-4/5 mt-8">
                    <a href="https://www.linkedin.com/in/alejandro-sanchez-zuniga/" className="social-button" target="_blank" rel="noreferrer">
                        <FaLinkedin /><span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/Alejosz1902" className="social-button" target="_blank" rel="noreferrer">
                        <FaGithub /><span>Github</span>
                    </a>
                    <a href="https://flowcv.com/resume/sif3f1djnb" className="social-button" target="_blank" rel="noreferrer">
                        <TbFileCv /><span>Resume</span>
                    </a>
                    <button onClick={handleEmail} className="social-button">
                        <MdEmail /><span>Email</span>
                    </button>
                </div>
            </div>
            <div className="md:w-1/4 mx-auto text-center">
                <div className="flex justify-center hover:scale-110 transform transition duration-500 ease-in-out">
                    <img src={profilepic} alt="Alejandro Sánchez" className="rounded-full h-full" id="profile-pic"/>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;