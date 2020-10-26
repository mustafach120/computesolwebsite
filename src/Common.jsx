import React from 'react';
import web from "../src/Images/img4.png";
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-centre">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-5 pt-6 pt-lg-5 order-2 order-lg-1 d-flex justify-content-centre flex-column">
                                    <h1>
                                        {props.name}
                                        <strong className="brand-name"> ComputeSol Company </strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team talented developer making Website and Android application
                                      

</h2>
<h3>
    <li>Android Developer</li>
    <li>Web Developer</li>
    <li>Graphic Designer</li>
    <li>Content Writer </li>
</h3>
                         <div className="mt-3">
                                        <NavLink to= {props.visit} className="btn-get-started">
                                        {props.btname}</NavLink>



                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home img" />

                                </div>
                            </div>



                        </div>

                    </div>

                </div>

            </section>
        </>
    )
};
export default Common;