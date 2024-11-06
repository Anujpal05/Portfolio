import React from 'react'
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import ProjectDetails from './Components/ProjectDetails';
import Home from './Components/Home';
import projectList from "./assets/projectList.json";
import project1 from "./assets/project1.png"
import project2 from "./assets/project2.jpg"
import project3 from "./assets/project3.png"
import projectWeb1 from "./assets/project1.webp"
import projectWeb2 from "./assets/project2.webp"
import projectWeb3 from "./assets/project3.webp"

function App() {

  return (
    <div className=' bg-black text-white min-h-screen min-w-screen h-fit w-fit pb-10'>
      {/* Using Toastify for notifications */}
      <Toaster />
      {/* Defines route for perticular endpoint and then render their Components */}
      <HashRouter>
        <Routes>
          <Route path='/project1' element={<ProjectDetails details={projectList.project1} img={project1} imgWeb={projectWeb1} />} />
          <Route path='/project2' element={<ProjectDetails details={projectList.project2} img={project2} imgWeb={projectWeb2} />} />
          <Route path='/project3' element={<ProjectDetails details={projectList.project3} img={project3} imgWeb={projectWeb3} />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App