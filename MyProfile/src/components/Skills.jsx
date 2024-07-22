import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaAngular } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Sidebar from './Sidebar';
import Profile from './Profile';


const Skills = () => {
    return (
        <div>
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-md-12">
                      
                        <div className="row">
                            <div className="col-md-4">
                                <Sidebar/>

                            </div>
                            <div className="col-md-8">
                                <h1>Skills</h1>
                                <h4>Programing languages </h4>
                                <FaHtml5 style={{ fontSize: "60px" }} />&nbsp;&nbsp;&nbsp;&nbsp;
                                <FaCss3Alt style={{ fontSize: "60px" }} />&nbsp;&nbsp;&nbsp;&nbsp;
                                <FaReact style={{ fontSize: "60px" }} />&nbsp;&nbsp;&nbsp;&nbsp;
                                <IoLogoJavascript style={{ fontSize: "60px" }} />&nbsp;&nbsp;&nbsp;&nbsp;
                                <FaAngular style={{ fontSize: "60px" }} />&nbsp;&nbsp;&nbsp;&nbsp;
                                <FaNode style={{ fontSize: "60px" }} />&nbsp;&nbsp;&nbsp;&nbsp;
                                <SiMongodb style={{ fontSize: "60px" }} /><br/><br/>

                                <h1>Projects</h1>
                                <h4> ECOMMERCE WEBISTE IN REACT JS</h4>
                               <h6> DESCRIPTION:</h6>
                                <h6>Frontend (Client-Side):</h6>	
                              <p>REACT Js: For building the user interface and handling the view layer.<br/>
                                HTML, CSS, JavaScript: Fundamentals for creating interactive and visually
                                appealing interfaces.</p>  
                                <h6>Backend (Server-Side):</h6>	
                                <p>Nodejs, Express js, MongoDB.<br/>

                                APIs: Implement RESTful APIs for communication between the frontend and
                                Backend.<br/>
                                JWT is used for Authentication and Authorization.</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills