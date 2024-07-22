import React from 'react';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="sidebar-container" className='sidebar d-none d-md-block'>
      <div className="container-fluid">
       
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <img src='girl.jpeg' alt="Profile" /><br />
                <Link id='sidemenu' to='/'>HOME</Link><br /><br />
                <a id='sidemenu' href='#internship'className="nav-link js-scroll-trigger">INTERNSHIP</a><br /><br />
                <Link id='sidemenu' to='/education'>EDUCATION</Link><br /><br />
                <Link id='sidemenu' to='/skills'>SKILLS</Link><br /><br />
                <Link id='sidemenu' to='/interests'>INTEREST</Link><br /><br />
                <a id='sidemenu' href='#awards' className="nav-link js-scroll-trigger">AWARDS</a><br /><br />


              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Sidebar;





