import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-row justify-between items-center text-center text-white min-h-10% font-mulish w-full md:w-3/5 mx-auto py-8 px-8">
            <div className="p-0 mx-0">
                <a href="#" className="hover:text-lightBlue">
                    <span className="text-3xl font-bold">alejo.jsz</span>
                </a>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center space-x-6">
                <div className="p-0 space-x-6 m-0 text-2xl">
                    <a href="#projects" className="hover:text-lightBlue">Projects</a>
                    <a href="#stack" className="hover:text-lightBlue">Stack</a>
                    <a href="#about" className="hover:text-lightBlue">About</a>
                    <a href="#contact" className="hover:text-lightBlue">Contact</a>
                </div>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-24 z-10 left-0 w-full bg-darkBlue opacity-80 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
                    <a href="#projects" className="hover:text-lightBlue" onClick={toggleMenu}>Projects</a>
                    <a href="#stack" className="hover:text-lightBlue" onClick={toggleMenu}>Stack</a>
                    <a href="#about" className="hover:text-lightBlue" onClick={toggleMenu}>About</a>
                    <a href="#contact" className="hover:text-lightBlue" onClick={toggleMenu}>Contact</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;