import React, { useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";


function Navbar(props) {
    //setting visibility of navbar in small or large devices
    const [visible, setvisible] = useState("hidden");

    //This function scrolling smoothly from current components to reffered component
    const scrollToSection = (ref) => {
        setvisible("hidden");
        ref.current.scrollIntoView({ behavior: "smooth" });
    }


    return (
        <div className=' fixed z-30'>
            <div className=' flex justify-between w-screen p-3 lg:px-16 md:px-7 items-center text-gray-300 bg-gray-950 '>
                <h1 className=' text-4xl font-bold bg-gradient-to-r from-purple-700 to-red-400 bg-clip-text text-transparent p-1'>Anuj</h1>
                <div className='hidden lg:flex space-x-8 font-semibold '>
                    <button className=' outline-none hover:scale-105 transition-all duration-300' onClick={() => scrollToSection(props.homeRef)} >Home</button>
                    <button className=' outline-none hover:scale-105 transition-all duration-300' onClick={() => scrollToSection(props.aboutRef)}>About me</button>
                    <button className=' outline-none hover:scale-105 transition-all duration-300' onClick={() => scrollToSection(props.educationRef)}>Education</button>
                    <button className=' outline-none hover:scale-105 transition-all duration-300' onClick={() => scrollToSection(props.myprojectRef)}>Project</button>
                    <button className=' outline-none hover:scale-105' onClick={() => scrollToSection(props.contactRef)}>Contact me</button>
                </div>
                <a href="https://drive.google.com/file/d/15Z0h1Z2eIKro9zkJ2ELSG7L-a6T6FEfP/view?usp=sharing" target='_blank'><button className='hidden lg:flex bg-gradient-to-r from-purple-700 to-red-400 p-2 px-5 rounded-full font-semibold outline-none hover:from-purple-900 hover:to-red-600 hover:scale-105 transition-all duration-300 '>My Resume</button></a>
                <button className='flex lg:hidden text-4xl outline-none ' onClick={() => setvisible("fixed")}><IoReorderThree /></button>

                {/* For responsiveness creating another navbar container for small device like mobile or tablets. */}
                <div className={`${visible} left-0 top-0 h-screen w-screen`}>
                    <div className={`${visible} right-0 top-0 h-screen w-3/6 bg-zinc-900 text-gray-300 animate-r-slide-nav  transition-all duration-500`}>
                        <div className=' w-full flex justify-end'><button className=' p-4 text-2xl outline-none' onClick={() => setvisible("hidden")}><RxCross1 /></button></div>
                        <div className=' flex flex-col space-y-5  '>
                            <button className=' outline-none hover:scale-105 transition-all duration-300' onClick={() => scrollToSection(props.homeRef)} >Home</button>
                            <button className=' outline-none hover:scale-105 transition-all duration-300' onClick={() => scrollToSection(props.aboutRef)}>About me</button>
                            <button className=' outline-none hover:scale-105 transition-all duration-300' onClick={() => scrollToSection(props.educationRef)}>Education</button>
                            <button className=' outline-none hover:scale-105 transition-all duration-300' onClick={() => scrollToSection(props.myprojectRef)}>Project</button>
                            <button className=' outline-none hover:scale-105 transition-all duration-300' onClick={() => scrollToSection(props.contactRef)}>Contact me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
