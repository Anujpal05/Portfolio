import React from 'react'
import img from '../assets/anujImg.jpg'

//Profile Component
function Profile(props) {
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className=' py-20 pt-36 text-zinc-300'>
            <div className='h-fit min-w-screen rounded-full flex justify-center items-center'>
                <img src={img} alt="Image" loading='lazy' className=' h-52 w-52 border-2 border-white rounded-full' />
            </div>
            <div className=' flex  flex-col justify-center items-center'><h1 className=' text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500  to-red-500 p-3'>Hii , I am Anuj Pal</h1>
                <h1 className=' text-4xl md:text-5xl font-semibold text-gray-400'>I am Web Developer.</h1></div>
            <div className=' flex justify-center p-6 space-x-10'>
                <button className='border-2 border-zinc-300 bg-gradient-to-r from-purple-700 to-red-500 p-2 px-5 rounded-full font-semibold outline-none hover:from-purple-900 hover:to-red-600 transition-all duration-400 hover:scale-105' onClick={() => scrollToSection(props.contactRef)}><span className='hidden md:flex'>Contact with me</span><span className=' flex md:hidden'>Contact me</span></button>
                {/* My Resume link  */}
                <a href="https://drive.google.com/file/d/15Z0h1Z2eIKro9zkJ2ELSG7L-a6T6FEfP/view?usp=sharing" target='_blank'> <button className='border-2 border-zinc-300 hover:bg-gradient-to-r from-purple-700 to-red-500 p-2 px-5 rounded-full font-semibold outline-none transition-all duration-400 hover:scale-105'>My Resume</button></a>
            </div>
        </div >
    )

}

export default Profile
