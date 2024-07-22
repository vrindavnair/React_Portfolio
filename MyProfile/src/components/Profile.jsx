
import React from 'react';
import { Navbar, Nav,  Container, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './profile.css'

import About from './About';
import Internship from './Internship';
import Education from './Education';
import Skills from './Skills';
import Interersts from './Interersts';
import Awards from './Awards';



const Profile = () => {
  return (
    <div>
       <Navbar style={{position:'fixed', width:'100%'}} collapseOnSelect expand="lg" bg="danger" variant="dark" id='navfixed' >
      <Container>
        <Navbar.Brand style={{fontWeight:'bold'}} >VRINDA V NAIR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Nav>
            <Link to='/about' className='navspace'>ABOUT</Link>
            <Link to='/education' className='navspace'>EDUCATION</Link>
            <Link to='/internship' className='navspace'>INTERNSHIPS</Link>
            <Link to='/skills' className='navspace'>SKILLS</Link>
            <Link to='/awards' className='navspace'> AWARDS </Link>
            <Link to='/interests' className='navspace'> INTRESTS </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br/>
    <About/><br/><br/>
    <Internship/><br/><br/>
    <Education/><br/><br/>
    <Skills/><br/><br/>
    <Interersts/><br/><br/>
    <Awards/>
    
      </div>
  
  );
}

export default Profile;

