import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

//In This Page My Projects details are show with their source code and live demo link
function ProjectDetails(props) {

    const Project = props.details;

    return (
        <div className=' min-w-[100vw] h-fit w-fit '>
            <div className=' p-3 bg-gray-950 mb-5 flex justify-between md:px-20 '>
                <Link to={"/"} className='text-4xl font-bold bg-gradient-to-r from-purple-700 to-red-500 bg-clip-text text-transparent p-1 md:px-10'>Anuj</Link>
                <div className='flex md:space-x-10 space-x-2 justify-center items-center md:text-xl font-bold px-2 md:px-10 '>
                    <a href={Project.GitHubLink} target='_blank' className=' flex flex-col md:flex-row items-center space-x-2 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-700 to-red-500 bg-clip-text text-transparent '><span><FaGithub className='text-gray-400' /> </span><p>Source Code</p></a>
                    <a href={Project.LiveLink} target="_blank" className='flex md:flex-row flex-col items-center space-x-2 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-700 to-red-500 bg-clip-text text-transparent'><span><FaLink className='text-gray-400' /></span><p>Live Demo</p></a>
                </div>
            </div>
            <div>
                <div className=' flex justify-center'><h1 className='text-4xl md:text-5xl  text-center bg-gradient-to-r from-purple-700 to-red-500 bg-clip-text text-transparent font-bold w-fit p-2'>Project Details</h1></div>
                <div className=' grid grid-cols-1 lg:grid-cols-2 items-center justify-center p-5 md:px-14'>
                    <a href={Project.LiveLink} target='_blank'><div className='w-[95%] lg:w-[80%] flex justify-center items-center p-2 md:p-3 bg-gradient-to-r from-purple-700 to-red-500 rounded-md transition-all duration-300 hover:scale-105'><img src={props.img} alt="project Image" loading='lazy' className='w-[98%] md:h-auto h-36  ' /></div></a>
                    <div className=' text-xl text-gray-300 font-semibold space-y-4 py-10'>
                        <div className=' flex space-x-3'>
                            <h1 className='bg-gradient-to-r text-gray-400 font-bold'>Name:</h1>
                            <h3 className=' text-gray-500'>{Project.name}</h3>
                        </div>
                        <div>
                            <h1 className=' bg-gradient-to-r text-gray-400 font-bold w-fit'>Description:</h1>
                            <h3 className=' text-[18px] text-gray-500'>{Project.description}</h3>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center p-5 md:pb-14 md:px-14'>
                    <div>
                        <h1 className='text-3xl  bg-gradient-to-r text-gray-400 font-semibold w-fit'>Features</h1>
                        <div className=' py-5'>
                            {
                                // Mapping projects all features
                                Project.features.map((items, i) => (
                                    <li className=' text-gray-500 font-semibold' key={i}>{items}</li>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl bg-gradient-to-r text-gray-400 font-semibold w-fit flex items-center p-1 gap-2'><span>Technology</span><span className=' text-gray-500'><GrTechnology /></span></h1>
                        <div className=' py-5'>
                            {
                                //Mapping projects all technology
                                Project.technology.map((items, i) => (
                                    <li className=' text-gray-500 font-semibold' key={i}>{items}</li>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ProjectDetails
