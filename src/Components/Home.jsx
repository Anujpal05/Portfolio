import React, { useRef } from 'react'
import About from './About'
import MyProject from './MyProject'
import Contact from './Contact'
import Footer from './Footer'
import Profile from './Profile';
import Navbar from './Navbar'


function Home() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const myprojectRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div>
            <Navbar homeRef={homeRef} aboutRef={aboutRef} myprojectRef={myprojectRef} contactRef={contactRef} />
            <div ref={homeRef}><Profile contactRef={contactRef} /> </div>
            <div ref={aboutRef}> <About /></div>
            <div ref={myprojectRef}><MyProject /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
        </div>
    )
}

export default Home

