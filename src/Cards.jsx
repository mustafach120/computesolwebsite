import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/Images/img1.jpg';

const Cards = (props) => {
    return (
        <>
         
                            <div className="col-md-8 col-10 mx-auto ">
                                <div className="card"  >
                                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                                        <p className="card-text">We have talented & Skilled team about related field</p>
                                        <NavLink to="" className="btn btn-primary">Home</NavLink>
                                    </div>
                                </div>
                            </div>
                        
                         
                    
        </>
    )
};
export default Cards;