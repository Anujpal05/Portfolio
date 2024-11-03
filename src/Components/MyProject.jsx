import React from 'react';
import projectWeb1 from '../assets/project1.webp';
import projectWeb2 from '../assets/project2.webp';
import projectWeb3 from '../assets/project3.webp';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.png';
import { Link } from 'react-router-dom';


//Here My projects links are provided for get more detail about projects
function MyProject() {
    return (
        <div className=' py-20 flex flex-col justify-center items-center min-w-screen'>
            <h1 className=' text-5xl font-semibold text-center text-gray-300'>Projects</h1>
            <div className=' grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 gap-10 py-10 lg:p-10 lg:px-20'>
                <div className=' p-2 bg-gradient-to-r animate-bg-change from-purple-700 to-red-500 hover:bg-gray-800 rounded-lg w-80 hover:scale-105 transition-all duration-300'>
                    <Link to={"/project1"}>
                        {/* <picture>
                            <source srcSet={projectWeb1} type='image/webp' />
                        </picture> */}
                        <img src={project1} alt="project1" className='h-48' loading='lazy' />
                    </Link>
                </div>
                <div className='  p-2 bg-gradient-to-r animate-bg-change from-purple-700 to-red-500 rounded-lg w-80  hover:scale-105 transition-all duration-300  '>
                    <Link to={"/project2"}>
                        {/* <picture>
                            <source srcSet={projectWeb2} type='image/webp' />
                        </picture> */}
                        <img src={project2} alt="project2" className='h-48' loading='lazy' />
                    </Link>
                </div>
                <div className='  p-2 bg-gradient-to-r animate-bg-change from-purple-700 to-red-500 rounded-lg w-80  hover:scale-105 transition-all duration-300  '>
                    <Link to={"/project3"}>
                        {/* <picture>
                            <source srcSet={projectWeb3} type='image/webp' />
                        </picture> */}
                        <img src={project3} alt="project3" className='h-48' loading='lazy' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MyProject
