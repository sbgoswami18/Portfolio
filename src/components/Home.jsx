import React, { useEffect, useState } from 'react'

import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import checkmark from "../assets/checkmark.png";
import project_1 from "../assets/project_1.png";
import project_2 from "../assets/project_2.png";
import project_3 from "../assets/project_3.png";
import email from "../assets/email.png";
import resume from "../assets/resume.pdf";

import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import SmallScreenNavbar from './SmallScreenNavbar';

const Home = () => {
    
    const [isClose, setIsClose] = useState(false);

    const handleCrossButton = () => { 
        setIsClose(prevState => !prevState);  
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsClose(false);
            }
        };

        window.addEventListener('resize', handleResize);
    }, []);

  return (
    <div>
        {/* Wraper */}
        <div className="relative flex flex-col w-[100vw] h-[100vh] overflow-x-hidden scroll-smooth">
            {/* Container */}
            <div className="flex flex-col h-full w-11/12 mx-auto">
                {/* Main Section */}
                <div className="flex flex-col min-h-[100%]">
                    {/* Navbar */}
                    <div className="flex flex-row justify-between my-10 items-center">
                        <div>
                            <a href='/'>
                                <div className="text-4xl font-bold hover:text-blue-500 transition-all duration-200 cursor-pointer">
                                    Portfolio
                                </div>
                            </a>
                        </div>
                        <div className="flex-row gap-x-6 text-xl hidden md:flex">
                            <a href="#about_link" className='font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>About</a>
                            <a href="#experience_link" className='font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>Skills</a>
                            <a href="#Project_link" className='font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>Projects</a>
                            <a href="#contact_link" className='font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>Contact</a>
                        </div>
                        {/* hamburger */}
                        {
                            isClose === false ? (
                                <button className="mr-1 md:hidden hover:text-blue-500 transition-all duration-200"
                                    onClick={handleCrossButton}
                                >
                                    <AiOutlineMenu fontSize={24}  />
                                </button>
                            ) :
                            (
                                <button className="mr-1 md:hidden hover:text-blue-500 transition-all duration-200"
                                    onClick={handleCrossButton}
                                >
                                    <ImCross fontSize={24}  />
                                </button>
                            )
                        }
                        {
                            isClose && <SmallScreenNavbar 
                                            isClose={isClose}
                                            handleCrossButton={handleCrossButton}
                                        />
                        }
                    </div>

                    {/* Hero Section */}
                    <div className="flex flex-c justify-center items-center h-[100%]">
                        <div className="flex flex-col gap-y-4 text-center">
                            <p className="text-xl font-bold text-gray-500">Hello, I'm</p>
                            <h1 className="text-5xl font-bold">Shivam Goswami</h1>
                            <h2 className="text-3xl font-bold text-gray-500">Full Stack Web Developer</h2>
                            <div className="flex flex-row gap-x-4 justify-center items-center">
                                <a href={resume} download="Shivam_Goswami_Resume.pdf">
                                    <button className="transition-all duration-300 ease-linear bg-black text-white font-semibold px-4 py-3 rounded-full border-white border-2 hover:bg-white hover:text-black hover:border-black hover:border-2">Download CV</button>
                                </a>
                                <a href="#contact_link">
                                    <button className="transition-all duration-300 ease-linear bg-white text-black font-semibold px-4 py-3 rounded-full border-black border-2 hover:bg-black hover:text-white">Contact Info</button>
                                </a>
                            </div>
                            <div className="flex flex-row gap-x-6 justify-center items-center">
                                <a href='https://www.linkedin.com/in/shivam-goswami-8bbb3b208' target='_blank'>
                                    <img className="cursor-pointer w-8 h-8 hover:scale-110 transition-all duration-200 ease-linear" src={linkedin} alt="linkedin" width="50px" height="50px" />
                                </a>
                                <a href='https://github.com/sbgoswami18' target='_blank'>
                                    <img className="cursor-pointer w-8 h-8 hover:scale-110 transition-all duration-200 ease-linear" src={github} alt="github" width="50px" height="50px" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Me Section */}
                <div id="about_link" className='flex flex-col min-h-[100%] justify-center items-center lg:gap-y-10'>
                    <div className='flex flex-col gap-y-2 text-center'>
                        <p className='text-gray-500'>Get To Know More</p>
                        <h2 className='text-4xl font-bold'>About Me</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-y-4 lg:gap-y-10 mt-10'>
                        <div className='flex flex-col gap-y-4 md:flex-row w-[100%] mx-auto lg:px-[8rem] gap-x-10'>
                            <div className='flex flex-col items-center w-[90%] md:w-[40%] mx-auto lg:px-[0rem] py-[2rem] border-gray-500 border-2 rounded-3xl text-center'>
                                <img src={experience} alt="experience" width="50px" height="50px" />
                                <h3 className=' font-bold text-xl'>Experience</h3>
                                <p>Experience In</p>
                                <p>Full Stack Web Development</p>
                            </div>
                            <div className='flex flex-col items-center w-[90%] md:w-[40%] mx-auto lg:px-[0rem] py-[2rem] border-gray-500 border-2 rounded-3xl text-center'>
                                <img src={education} alt="education" width="50px" height="50px" />
                                <h3 className=' font-bold text-xl'>Education</h3>
                                <p>Information Technology(IT)</p>
                                <p>Bachelor Of Engineeringe(BE)</p>
                            </div>
                        </div>
                        <div className='max-w-[90%] md:max-w-[70%] lg:max-w-[60%] text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] mx-auto flex text-center'>
                            <p> I am a full stack web developer. I have built
                                numerous web projects and created web games
                                for learning purposes. I also have knowledge of
                                data structures and algorithms.
                            </p>
                        </div>
                    </div>
                    {/* <div>
                        <img src="assets/arrow.png" alt="arrow" width="50pxpx" height="50pxpx" />
                    </div> */}
                </div>

                {/* <Experience Section */}
                <div id="experience_link" className='flex flex-col h-fit justify-center items-center gap-y-10'>
                    <div className='flex flex-col gap-y-2 text-center'>
                        <p className='text-gray-500'>Explore My</p>
                        <h1 className='text-5xl font-bold'>Skills</h1>
                    </div>
                    <div className='flex flex-col gap-y-2 w-[100%]'>
                        <div className='flex flex-col md:flex-row w-[100%] gap-x-10 gap-y-2'>
                            {/* Frontend */}
                            <div className='flex flex-col gap-y-4 p-4 border-gray-500 border-2 rounded-3xl w-[90%] md:w-[60%] lg:w-[40%] mx-auto'>
                                <h1 className='text-3xl font-bold text-gray-500 text-center'>Frontend Technologies</h1>
                                <div className='flex flex-wrap gap-x-[10rem] items-center justify-center gap-y-4'>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>HTML</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>CSS</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>Tailwind CSS</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>JavaScript</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>React JS</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Backend */}
                            <div className='flex flex-col gap-y-4 p-4 border-gray-500 border-2 rounded-3xl w-[90%] md:w-[60%] lg:w-[40%] mx-auto'>
                                <h1 className='text-3xl font-bold text-gray-500 text-center'>Backend Technologies</h1>
                                <div className='flex flex-wrap gap-x-[10rem] items-center justify-center gap-y-4 md:gap-y-20'>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>Express JS</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>Node JS</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>MongoDB</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row w-[100%] gap-x-10 gap-y-2'>
                            {/* Programming */}
                            <div className='flex flex-col gap-y-4 p-4 border-gray-500 border-2 rounded-3xl w-[90%] md:w-[60%] lg:w-[40%] mx-auto'>
                                <h1 className='text-3xl font-bold text-gray-500 text-center'>Programming Languages</h1>
                                <div className='flex flex-wrap gap-x-[10rem] items-center justify-center my-auto gap-y-4 md:gap-y-20'>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>C</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>C++</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Tools */}
                            <div className='flex flex-col gap-y-4 p-4 border-gray-500 border-2 rounded-3xl w-[90%] md:w-[60%] lg:w-[40%] mx-auto'>
                                <h1 className='text-3xl font-bold text-gray-500 text-center'>Tools</h1>
                                <div className='flex flex-wrap gap-x-[10rem] items-center justify-center gap-y-4'>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>VS Code</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>Postman</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-x-4 items-center justify-center'>
                                        <img src={checkmark} alt="checkmark" className='w-12 h-12' />
                                        <div className='flex flex-col'>
                                            <h3 className=' text-[1.2rem] font-bold'>MongoDB Compass</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="arrow">
                        <img src="assets/arrow.png" onclick="location.href='./#Project_link'" alt="arrow" width="50pxpx" height="50pxpx" />
                    </div> */}
                </div>

                {/* <Projects Section */}
                <div id="Project_link" className='flex flex-col h-fit justify-center items-center lg:gap-y-10 mt-[10rem]'>
                    <div className='flex flex-col gap-y-2 text-center mb-10'>
                        <p className='text-gray-500'>Browse My Recent</p>
                        <h1 className='text-5xl font-bold'>Projects</h1>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-x-4 gap-y-4 w-[100%] text-center'>
                        <div className='mx-auto flex flex-col items-center gap-y-6 border-black border-2 rounded-3xl p-8'>
                            <img src={project_1} alt="project_1" className='w-[18rem] h-[18rem] object-cover rounded-3xl' />
                            <h2 className='text-4xl font-bold'>StudyCircle</h2>
                            <div className='flex gap-x-4'>
                                <a href='https://studycircle.vercel.app/' target='_blank'>
                                    <button className="transition-all duration-300 ease-linear bg-white text-black font-semibold px-6 py-3 rounded-full border-black border-2 hover:bg-black hover:text-white">Live Demo</button>
                                </a>
                                <a href='https://github.com/sbgoswami18/StudyCircle' target='_blank'>
                                    <button className="transition-all duration-300 ease-linear bg-white text-black font-semibold px-9 py-3 rounded-full border-black border-2 hover:bg-black hover:text-white">GitHub</button>
                                </a>
                            </div>
                        </div>
                        <div className='mx-auto flex flex-col items-center gap-y-6 border-black border-2 rounded-3xl p-8'>
                            <img src={project_2} alt="project_2" className='w-[18rem] h-[18rem] object-cover rounded-3xl' />
                            <h2 className='text-4xl font-bold'>EasyShop</h2>
                            <div className='flex gap-x-4'>
                                <a href='https://easyshop-rosy.vercel.app/' target='_blank'>
                                    <button className="transition-all duration-300 ease-linear bg-white text-black font-semibold px-6 py-3 rounded-full border-black border-2 hover:bg-black hover:text-white">Live Demo</button>
                                </a>
                                <a href='https://github.com/sbgoswami18/EasyShop' target='_blank'>
                                    <button className="transition-all duration-300 ease-linear bg-white text-black font-semibold px-9 py-3 rounded-full border-black border-2 hover:bg-black hover:text-white">GitHub</button>
                                </a>
                            </div>
                        </div>
                        <div className='mx-auto flex flex-col items-center gap-y-6 border-black border-2 rounded-3xl p-8'>
                            <img src={project_3} alt="project_3" className='w-[18rem] h-[18rem] object-cover rounded-3xl' />
                            <h2 className='text-4xl font-bold'>Weather App</h2>
                            <div className='flex gap-x-4'>
                                <a href='https://sbgoswami18.github.io/Weather_App.github.io/' target='_blank'>
                                    <button className="transition-all duration-300 ease-linear bg-white text-black font-semibold px-6 py-3 rounded-full border-black border-2 hover:bg-black hover:text-white">Live Demo</button>
                                </a>
                                <a href='https://github.com/sbgoswami18/Weather_App.github.io' target='_blank'>
                                    <button className="transition-all duration-300 ease-linear bg-white text-black font-semibold px-9 py-3 rounded-full border-black border-2 hover:bg-black hover:text-white">GitHubo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div class="arrow">
                        <img src="assets/arrow.png" onclick="location.href='./#contact_link'" alt="arrow" width="50pxpx" height="50pxpx" />
                    </div> */}
                </div>

                {/* Contact Me Section */}
                <div id="contact_link" className='flex flex-col min-h-[100%] justify-center items-center gap-y-10 pt-[10rem]'>
                    <div className='flex flex-col text-center gap-y-2'>
                        <p className=' text-gray-500'>Get In Touch</p>
                        <h1 className='text-5xl font-bold'>Contact Me</h1>
                    </div>
                    <div className='flex w-[100%] md:w-[60%] lg:w-[50%] justify-between mb-[10rem] border-black border-2 rounded-3xl px-1 py-2 md:p-4'>
                        <div>
                            <a href="mailto:sbgoswami18@gmail.com" className='flex gap-x-1 md:gap-x-4 items-center'>
                                <img src={email} alt="email" className='w-10 h-10' />
                                <p className='text-[1.1rem] md:text-[1.2rem] hover:text-blue-500 transition-all duration-200 hover:underline'>sbgoswami18@gmail.com</p>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/shivam-goswami-8bbb3b208" target='_blank' className='flex gap-x-1 md:gap-x-4 items-center cursor-pointer'>
                                <img src={linkedin} alt="linkedin" className='w-8 h-8' />
                                <p className='text-[1.1rem] md:text-[1.2rem] hover:text-blue-500 transition-all duration-200 hover:underline'>LinkedIn</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-x-6 md:gap-x-20'>
                        <a href="#about_link" className='text-[1.5rem] font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>About</a>
                        <a href="#experience_link" className='text-[1.5rem] font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>Skills</a>
                        <a href="#Project_link" className='text-[1.5rem] font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>Projects</a>
                        <a href="#contact_link" className='text-[1.5rem] font-semibold hover:text-blue-500 transition-all duration-200 hover:underline'>Contact</a>
                    </div>
                    <div className='text-center text-[.9rem] md:text-[1rem]'>
                        <p>Copyright © 2024 Shivam Goswami. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
