import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar'



const Internship = () => {
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
                        <h1>INTERNSHIPS</h1>
                        <h3>Software Developing</h3>
                        <h4> Futuro IT Solutions, Ernakulam </h4>
                        <h6> MERN & MEAN FULL STACK DEVELOPMENT	2023-2024</h6>
                        <p>  •	Developed interactive and responsive user interface.
                            •	Back End connections<br />
                            •	Knowledge of Restfull Api<br />
                            •	Knowledge of GitHub</p><br />

                        <h4> NYESTE VENTURE TECHNOLOGIES PVT LTD ERNAKULAM </h4>
                        <h5> PYTHON TRAINEE	2022-2023</h5>
                        <p>•	Knowledge of python programming Language<br />
                            •	Knowledge of JavaScript, HTML, CSS, Bootstrap.</p>

                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Internship


