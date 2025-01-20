import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


//Profile Component
function Profile(props) {
    const textNameRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }


    useEffect(() => {
        const textElement = document.getElementById("animated-text");
        const textElement2 = textNameRef.current;
        const name = 'Hii , I am Anuj Pal';

        const messages = ['I am Web Developer.', 'I am FrontEnd Developer.', 'I am BackEnd Developer.', 'I am Computer Engineer.'];
        let messageIndex = 0;
        let charIndex = 0;
        let typingSpeed = 100;
        let typeTimeout, eraseTimeout;

        let chIndex = 0;
        let nameTimeout;

        const typeName = () => {
            if (charIndex < name.length) {
                if (charIndex === 0) {
                    textElement2.textContent = "";
                }
                textElement2.textContent += name.charAt(chIndex);
                chIndex++;
                nameTimeout = setTimeout(typeName, 100);
            }
        }

        typeName()

        const typeMessage = () => {
            if (charIndex < messages[messageIndex].length) {
                if (charIndex === 0) {
                    textElement.textContent = "";
                }
                textElement.textContent += messages[messageIndex].charAt(charIndex);
                charIndex++;
                typeTimeout = setTimeout(typeMessage, typingSpeed);
            } else {
                eraseTimeout = setTimeout(eraseMessage, 2000);
            }
        }

        const eraseMessage = () => {
            if (charIndex > 0) {
                textElement.textContent = messages[messageIndex].substring(0, charIndex - 1);
                charIndex--;
                eraseTimeout = setTimeout(eraseMessage, typingSpeed);
            } else {
                messageIndex = (messageIndex + 1) % messages.length;
                typeTimeout = setTimeout(typeMessage, 1000);
            }
        }
        typeMessage();

        return () => {
            clearTimeout(typeTimeout);
            clearTimeout(eraseTimeout);
            clearTimeout(nameTimeout);
        }

    }, [])


    useEffect(() => {
        const image = document.getElementsByClassName("image")[0];
        gsap.from(".animate-profile", {
            scale: 0,
            opacity: 0.2
        })
        if (image) {
            image.onload = () => {
                gsap.to(".animate-profile", {
                    scale: 1,
                    opacity: 1,
                    duration: 2
                })
            }
            if (image.complete) {
                image.onload();
            }
        }

    }, [])



    return (
        <div className=' py-20 pt-36 text-zinc-300'>
            <div className='h-fit min-w-screen rounded-full flex justify-center items-center animate-profile'>
                <img src={"https://res.cloudinary.com/dcfy1v0ab/image/upload/v1737372429/anujImg_qgbcga.jpg"} alt="Image" className='image border-2 border-white h-52 w-52 rounded-full' />
            </div>
            <div className=' flex  flex-col justify-center items-center'>
                <h1 ref={textNameRef} className=' text-4xl md:text-5xl min-h-14 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500  to-red-500 p-3' id=' text-name'></h1>
                <div className=' text-4xl md:text-5xl min-h-14 font-semibold text-gray-400 px-2 text-center' id='animated-text'></div>
            </div>
            <div className=' flex justify-center p-6 space-x-10'>
                <button className='border-2 border-zinc-300 bg-gradient-to-r from-purple-700 to-red-500 p-2 px-5 rounded-full font-semibold outline-none hover:from-purple-900 hover:to-red-600 transition-all duration-400 hover:scale-105' onClick={() => scrollToSection(props.contactRef)}><span className='hidden md:flex'>Contact with me</span><span className=' flex md:hidden'>Contact me</span></button>
                {/* My Resume link  */}
                <a href="https://drive.google.com/file/d/1NYcaNnXITDXnGM3i9ql_hRqCXzGRP0HX/view?usp=sharing" target='_blank'> <button className='border-2 border-zinc-300 hover:bg-gradient-to-r from-purple-700 to-red-500 p-2 px-5 rounded-full font-semibold outline-none transition-all duration-400 hover:scale-105'>My Resume</button></a>
            </div>
        </div >
    )

}

export default Profile
