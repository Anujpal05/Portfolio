import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

//Footer Component
function Footer() {
    return (
        <div>
            <hr className='border-gray-500' />
            <div className=' flex flex-col gap-3 p-5 justify-center items-center'>
                <div className='flex text-3xl text-gray-300 space-x-7'>
                    <span><a href="https://www.instagram.com/aj_official08/" target='_blank'><FaInstagram /></a></span>
                    <span><a href="https://github.com/Anujpal05" target='_blank'><FaGithub /></a></span>
                    <span><a href="https://www.linkedin.com/in/anuj-pal-bab3421b4/" target='_blank'><FaLinkedin /></a></span>
                </div>
                <h1> ©Copyright by Anuj Pal. All rights reserved.</h1>
            </div>
        </div>
    )
}

export default Footer
