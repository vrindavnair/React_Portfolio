import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";


import Sidebar from './Sidebar';
import Profile from './Profile';


const About = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
         
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <Sidebar />

              </div>
              <div className="col-md-8">
                <h1 id='name'>VRINDA V NAIR</h1>
                <h4 id='notes'>PLAMPARAMBIL(H)| ARPOOKARA EAST P O| KOTTAYAM| 686008</h4>
                <br />
                <h2><a href='' id='email'><MdEmail />08vrindavnair@gmail.com </a></h2>
                <br />
                <h4 id='notes'>A recent post-graduate with a strong foundation in web development
                  technologies and a passion for full-stack development. My goal is
                  to leverage my education and enthusiasm to make meaningful contributions
                  in web development while embracing best
                  practices and staying current with industry trends.</h4>
                <br />
                <h4> <a href='https://www.linkedin.com/in/vrinda-v-nair-8436561a0/'
                  style={{ textDecoration: 'none', fontSize: '40px', color: 'blue' }} >
                  <FaLinkedin /></a>

                  <a href='https://github.com/vrindavnair'
                    style={{ textDecoration: 'none', fontSize: '40px', color: 'black', marginLeft: '30px' }}>
                    <FaGithub />
                  </a>


                </h4>





              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default About







