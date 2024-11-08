import React, { useEffect } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.png';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//Here My projects links are provided for get more detail about projects
function MyProject() {

    useEffect(() => {

        const images = document.getElementsByClassName('images');
        const imgParent = document.getElementsByClassName("img-parent")
        const imageArray = Array.from(images)
        let count = 0;
        let imgLen = imageArray.length;
        if (imageArray.length > 0) {
            imageArray.forEach((img) => {
                img.onload = () => {
                    count++;
                    if (count === imgLen) {
                        for (let i = 0; i < imgParent.length; i++) {
                            imgParent[i].classList.add('animate-bg-change'); // Add the desired class here
                        }
                        gsap.fromTo(".animate-project", {
                            opacity: 0,
                            scale: 0.2,
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 2,
                            scrollTrigger: {
                                trigger: '.animate-project',
                                scroller: 'body',
                                start: "top 90%",
                                end: "top 65%",
                                scrub: 3,
                            },
                        });
                    }
                }
                if (img.complete) {
                    img.onload();
                }
            });
        }
    }, [])


    return (
        <div className=' py-5 lg:py-20 flex flex-col justify-center items-center min-w-screen animate-project'>
            <h1 className=' text-5xl font-semibold text-center text-gray-300'>Projects</h1>
            <div className=' grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 gap-10 py-10 lg:p-10 lg:px-20'>
                <div className=' img-parent p-2  hover:bg-gray-800 rounded-lg w-80 hover:scale-105 transition-all duration-300'>
                    <Link to={"/project1"}>
                        <img src={project1} alt="project1" className='h-48 images' loading=' lazy' />
                    </Link>
                </div>
                <div className='img-parent  p-2  rounded-lg w-80  hover:scale-105 transition-all duration-300  '>
                    <Link to={"/project2"}>
                        <img src={project2} alt="project2" className='h-48 images' loading=' lazy' />
                    </Link>
                </div>
                <div className=' img-parent p-2 rounded-lg w-80  hover:scale-105 transition-all duration-300  '>
                    <Link to={"/project3"}>
                        <img src={project3} alt="project3" className='h-48 images' loading=' lazy' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MyProject
