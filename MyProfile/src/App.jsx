import About from './components/About';
import Profile from './components/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from './Pages';
import Sidebar from './components/Sidebar';
import Internship from './components/Internship';
import Skills from './components/Skills';

import Education from './components/Education';
import Interersts from './components/Interersts';
import Awards from './components/Awards';


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile/>}/>
      <Route path='/' element={<Pages/>}/>

       <Route path='/about' element={<About/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/sidebar' element={<Sidebar/>}/>
       <Route path='/internship' element={<Internship/>}/>
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/interests' element={<Interersts/>}/>
       <Route path='/awards' element={<Awards/>}/>





      



      

    </Routes>
    </BrowserRouter>
   
      
    </>
  )
}

export default App
