import React from "react";
import bookmarkImg from "../assets/bookmark.png";
import { SiReact, SiTailwindcss, SiJavascript, SiPython, SiHtml5, SiCss3, SiBootstrap, SiFlask, SiTypescript, SiGithub } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

const Projects = () => {
    return (
        <div id='projects' className="w-full mx-auto md:mt-16 px-8 md:w-3/5">
            <div className="flex flex-col space-y-8 mt-12 text-start">
                <h2 className="title-section">Projects</h2>
                <div className="flex flex-col items-center space-y-4">
                    
                    <div className="flex flex-col w-full bg-darkBlue p-4 rounded-lg   md:space-y-0">
                        <h3 className="text-2xl text-white font-bold hover:text-grayishBlue md:p-2">Bookmark Project</h3>
                        <div className="flex flex-col md:flex-row-reverse w-full mx-auto mt-4">
                        <div className="flex flex-col md:mt-8 md:h-auto md:w-1/2 p-0 md:p-2">
                            <img src={bookmarkImg} alt="bookmark-projext" srcset="" className="object-contain rounded-lg"/>
                            <div className="flex flex-row space-x-4 w-full mt-4">
                                <a href="https://github.com/Alejosz1902/bookmark-manager" className="project-button" target="_blank" rel="noreferrer"><SiGithub/><span>Repositorie</span></a>
                                <a href="https://bookmark-manager-rose.vercel.app/" className="project-button" target="_blank" rel="noreferrer"><CgWebsite/><span>Live view</span></a>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 items-start md:p-2">
                            <p className="text-white mt-4 md:mt-8">This landing page is the final project of my Tailwind CSS certification course. It showcases a clean and fully responsive UI for a bookmark manager web application, built from the ground up using Tailwind CSS best practices. Throughout this project, I applied the utility-first approach to rapidly build and style components, while reinforcing principles like mobile-first design, semantic structure, and UI consistency. The result is a simple yet effective user interface that adapts seamlessly across devices, demonstrating my ability to translate design into functional, scalable code. This project reflects not only my growing proficiency in Tailwind, but also my commitment to learning by doing—because you learn to code by coding, and you get better at coding by practice.</p>
                            <div className="flex flex-row mt-4 mx-0 text-white md:mt-8">
                                
                                <div className="text-white hover:text-lightBlue pl-0 py-2 pr-2 hover:scale-110">
                                    <SiJavascript className="text-4xl" />
                                </div>
                                <div className="text-white hover:text-lightBlue p-2 hover:scale-110">
                                    <SiHtml5 className="text-4xl" />
                                </div>
                                <div className="text-white hover:text-lightBlue p-2 hover:scale-110">
                                    <SiCss3 className="text-4xl" />
                                </div>
                                <div className="text-white hover:text-lightBlue p-2 hover:scale-110">
                                    <SiTailwindcss className="text-4xl" />
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;