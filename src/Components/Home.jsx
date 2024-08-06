import React, { useRef } from 'react'
import About from './About'
import MyProject from './MyProject'
import Contact from './Contact'
import Footer from './Footer'
import Profile from './Profile';
import Navbar from './Navbar'
import Education from './Education'

//Home Page
function Home() {
    //Intialize all ref
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const myprojectRef = useRef(null);
    const contactRef = useRef(null);
    const educationRef = useRef(null);


    return (
        <div>
            <Navbar homeRef={homeRef} aboutRef={aboutRef} myprojectRef={myprojectRef} contactRef={contactRef} educationRef={educationRef} />
            <div ref={homeRef}><Profile contactRef={contactRef} /> </div>
            <div ref={aboutRef}> <About /></div>
            <div ref={educationRef}><Education /></div>
            <div ref={myprojectRef}><MyProject /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
        </div>
    )
}

export default Home

