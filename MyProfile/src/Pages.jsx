import React from 'react'
import About from './components/About'
import Education from './components/Education'
import Sidebar from './components/Sidebar'
import Internship from './components/Internship'
import Skills from './components/Skills'
import Interersts from './components/Interersts'
import Awards from './components/Awards'
import Profile from './components/Profile'



const Pages = () => {
  return (
    <div>
      <Profile/>
        <Sidebar/>
        <About/> 
          <Internship/>
         <Education/>  
         <Skills/>
         <Interersts/>
         <Awards/>


    </div>
  )
}

export default Pages