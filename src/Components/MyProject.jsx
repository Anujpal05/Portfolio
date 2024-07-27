import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import { Link } from 'react-router-dom';


function MyProject() {
    return (
        <div className=' py-20 flex flex-col justify-center items-center min-w-screen'>
            <h1 className=' text-5xl font-semibold text-center text-gray-300'>Projects</h1>
            <div className=' grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 md:gap-24 gap-10 py-10 md:p-10 md:px-20'>
                <div className=' p-2 bg-gradient-to-r animate-bg-change from-purple-700 to-red-500 hover:bg-gray-800 rounded-lg w-80 hover:scale-105 transition-all duration-300'>
                    <Link to={"/project1"}><img src={project1} alt="" className='h-48' /></Link>
                </div>
                <div className='  p-2 bg-gradient-to-r animate-bg-change from-purple-700 to-red-500 rounded-lg w-80  hover:scale-105 transition-all duration-300  '>
                    <Link to={"/project2"}> <img src={project2} alt="" className='h-48' /></Link>
                </div>
                <div className='  p-2 bg-gradient-to-r animate-bg-change from-purple-700 to-red-500 rounded-lg w-80  hover:scale-105 transition-all duration-300  '>
                    <Link to={"/project3"}><img src={project3} alt="" className='h-48' /></Link>
                </div>
            </div>
        </div>
    )
}

export default MyProject
