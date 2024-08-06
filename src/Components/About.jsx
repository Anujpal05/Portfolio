import React from 'react'


//About Component where my details and skills are show
function About() {
    return (
        <div className=' pt-10'>
            <h1 className=' text-5xl font-semibold text-center lg:p-10 p-6 text-gray-300 '>About me</h1>
            <p className='px-5 md:px-20 font-semibold text-gray-400'>Hi! I am Anuj Pal, currently pursuing my bachelors degree in Computer Engineering at Gandhinagar Institute of Technology (Gandhinagar University). I am interested in the field of Computer Science and Engineering, and working towards developing the necessary skills and knowledge to pursue a career in this area.</p>
            <div className='space-y-5 p-10 text-gray-400'>
                <div className='flex flex-col justify-center items-start space-y-3 md:items-center  md:flex-row md:space-x-10'>
                    <p className=' text-2xl font-semibold  md:w-[20%] items-start '>HTML & CSS</p>
                    <div className=' h-4 w-[90%] md:w-2/4 rounded-full bg-gray-700 '><div className=' w-[95%] bg-gradient-to-r  from-purple-700
                    to-red-500 h-full rounded-full'></div></div>
                </div>
                <div className='flex flex-col justify-center items-start space-y-3 md:items-center  md:flex-row md:space-x-10'>
                    <p className=' text-2xl font-semibold  md:w-[20%] items-start '>Javascript</p>
                    <div className=' h-4 w-[90%] md:w-2/4 rounded-full bg-gray-700 '><div className=' w-[85%] bg-gradient-to-r from-purple-700
                    to-red-500 h-full rounded-full'></div></div>
                </div>
                <div className='flex flex-col justify-center items-start space-y-3 md:items-center  md:flex-row md:space-x-10'>
                    <p className=' text-2xl font-semibold  md:w-[20%] items-start '>Tailwind CSS</p>
                    <div className=' h-4 w-[90%] md:w-2/4 rounded-full bg-gray-700 '><div className=' w-[75%] bg-gradient-to-r from-purple-700
                    to-red-500 h-full rounded-full'></div></div>
                </div>
                <div className='flex flex-col justify-center items-start space-y-3 md:items-center  md:flex-row md:space-x-10'>
                    <p className=' text-2xl font-semibold  md:w-[20%] items-start '>React JS</p>
                    <div className=' h-4 w-[90%] md:w-2/4 rounded-full bg-gray-700 '><div className=' w-[80%] bg-gradient-to-r from-purple-700
                    to-red-500 h-full rounded-full'></div></div>
                </div>
                <div className='flex flex-col justify-center items-start space-y-3 md:items-center  md:flex-row md:space-x-10'>
                    <p className=' text-2xl font-semibold  md:w-[20%] items-start '>Node JS</p>
                    <div className=' h-4 w-[90%] md:w-2/4 rounded-full bg-gray-700 '><div className=' w-[70%] bg-gradient-to-r from-purple-700
                    to-red-500 h-full rounded-full'></div></div>
                </div>
                <div className='flex flex-col justify-center items-start space-y-3 md:items-center  md:flex-row md:space-x-10'>
                    <p className=' text-2xl font-semibold  md:w-[20%] items-start '>C language</p>
                    <div className=' h-4 w-[90%] md:w-2/4 rounded-full bg-gray-700 '><div className=' w-[95%] bg-gradient-to-r from-purple-700
                    to-red-500 h-full rounded-full'></div></div>
                </div>
                <div className='flex flex-col justify-center items-start space-y-3 md:items-center  md:flex-row md:space-x-10'>
                    <p className=' text-2xl font-semibold  md:w-[20%] items-start '>Java language</p>
                    <div className=' h-4 w-[90%] md:w-2/4 rounded-full bg-gray-700 '><div className=' w-[80%] bg-gradient-to-r from-purple-700
                    to-red-500 h-full rounded-full'></div></div>
                </div>
            </div>
        </div>
    )
}

export default About
