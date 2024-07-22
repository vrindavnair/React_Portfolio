import React from 'react'
import Sidebar from './Sidebar'
import { LiaAwardSolid } from "react-icons/lia";


const Awards = () => {
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
                               
                                    <h1>Awards & Certificates</h1>
                                <LiaAwardSolid style={{fontSize:'50px'}}/>Certification in MEARN full stack development from Futuro IT Solutions<br/>
                                <LiaAwardSolid style={{fontSize:'50px'}}/>Internship in python from Nyeste venture PVT LTD<br/>
                                <LiaAwardSolid style={{fontSize:'50px'}}/>NPTEL Certification in Cloud Computing<br/>
                                <LiaAwardSolid style={{fontSize:'50px'}}/>IT Administration Certificate
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Awards