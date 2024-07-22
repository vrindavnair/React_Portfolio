import React from 'react'
import Sidebar from './Sidebar';

const Interersts = () => {
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
                                <h1>Interests</h1>
                                <p style={{fontSize:'25px'}}>Outside of work, I enjoy cooking, dancing, and outdoor activities like visiting the beach.<br />
                                    These hobbies bring me joy, help me relax, and keep me active</p>

                            

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interersts