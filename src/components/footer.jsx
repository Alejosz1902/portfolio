import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';
import resume from '../assets/alejandros-resume.pdf';
import Swal from 'sweetalert2';

export default function Footer() {
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
    <div className='w-full bg-darkBlue mt-12 p-8'>
      <div className='w-full mx-auto'>
        <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-24 text-white w-full mx-auto md:w-3/5 md:justify-between px-8">
            <div className="flex flex-col justify-center mx-auto items-start md:w-1/3 px-2 pb-4">
                <a href="#" className="hover:text-lightBlue">
                  <span className="text-xl font-bold">alejo.jsz</span>
                </a>
            </div>
            <div className="flex flex-row justify-center text-xl items-center space-x-6 md:w-1/3 md:justify-between p-2">
                <a href="#projects" className="hover:text-lightBlue">Projects</a>
                <a href="#stack" className="hover:text-lightBlue">Stack</a>
                <a href="#about" className="hover:text-lightBlue">About</a>
                <a href="#contact" className="hover:text-lightBlue">Contact</a>
            </div>
            <div className='flex flex-row justify-center items-center space-x-6 md:justify-end md:space-x-0 md:w-1/3 p-2'>
                <a href="https://www.linkedin.com/in/alejandro-sanchez-zuniga/" className="social-footer" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                  </a>
                <a href="https://github.com/Alejosz1902" className="social-footer" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="../src/assets/alejandros-resume.pdf" className="social-footer" download={resume} target="_blank" rel="noreferrer">
                  <TbFileCv />
                </a>
                <button onClick={handleEmail} className="social-footer">
                  <MdEmail />
                </button>
            </div>
          </div>
      </div>
      <div className='w-full mx-auto'>
        <p className='text-lightBlue text-center '>All rights reserved.</p>
      </div> 
        
    </div>
  );
}
