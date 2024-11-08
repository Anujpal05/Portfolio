import React, { useEffect } from 'react'
import { IoIosMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//Contact Component
function Contact() {

    useEffect(() => {
        gsap.from(".animate-contact", {
            scale: 0.2,
            opacity: 0
        });
        gsap.to(".animate-contact", {
            scale: 1,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".animate-contact",
                scroller: "body",
                start: "top bottom",   // Starting point for large screens
                end: "top 70%",
                scrub: 3
            }
        });
    }, [])


    //Submit form and get email using web3forms server
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);


        formData.append("access_key", import.meta.env.VITE_ACCESSKEY);

        //Post request on web3forms server
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        //get and convert response in json data 
        const data = await response.json();

        if (data.success) {
            //Reset input field of form
            event.target.reset();
            toast.success('Your form submitted successfully!');
        } else {
            console.log("Error", data);
            toast.error("Internal server error!")
        }
    };

    return (
        <div className=' animate-contact'>
            <h1 className=' text-5xl font-semibold text-center text-gray-300 pt-5 lg:pt-20'>Contact</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 md:px-9 lg:px-16 px-8  py-10 text-gray-300'>
                <div className=' md:px-16 lg:px-24 space-y-7'>
                    <h1 className=' w-fit bg-clip-text text-transparent font-bold bg-gradient-to-r from-purple-600 to-red-400 text-4xl '>Let's talk</h1>
                    <p className=' text-semibold'>
                        Do you have any questions? You will contact me. I will come back to you within a matter of hours to help you and clear your doubts.
                    </p>
                    <div className=' flex items-center space-x-3'>
                        <div className=" text-3xl"><IoIosMail /></div>
                        <p>ajpal7141@gmail.com</p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className=" text-2xl"><LuPhoneCall /></div>
                        <p>+918866575512</p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className=" text-2xl"><IoLocationOutline /></div>
                        <p>Ahemdabad , Gujarat</p>
                    </div>
                </div>
                <div>

                    {/* Creating a contact form */}
                    <form onSubmit={onSubmit}>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="name" className='text-gray-400 font-semibold py-2'>Your Name</label>
                            <input placeholder="Enter your name" name='name' type="text" required className=' bg-zinc-800 p-2 rounded-md outline-none' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="email" className='text-gray-400 font-semibold py-2'>Your Email</label>
                            <input placeholder='Enter your email' name='email' type="email" required className=' bg-zinc-800 p-2 rounded-md outline-none' />
                        </div>
                        <div className=' flex flex-col py-2'>
                            <label htmlFor="message" className='text-gray-400 font-semibold py-2'>Write your message here</label>
                            <textarea placeholder='Enter your message' name='message' type="text" required rows={5} className=' bg-zinc-800 p-2 rounded-md outline-none' />
                        </div>
                        <div className='flex justify-center p-3'><button type="submit" className=' bg-gradient-to-r from-purple-700 to-red-500 p-2 px-5 rounded-full font-semibold outline-none hover:from-purple-800 hover:to-red-500 text-xl hover:scale-105 transition-all duration-300' >Sumbit</button></div>
                    </form>

                </div>
            </div >
        </div>
    )
}

export default Contact
