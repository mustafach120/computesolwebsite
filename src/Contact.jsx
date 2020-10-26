import React, { useState } from 'react';


const Contact = () => {
    const [data, setData] = useState({
        fulname: '',
        phone: '',
        email: '',
        message: '',
    });
    const InputEvent=(event)=>{
        const {name, value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            };
        
        });

    };

  const FormSubmit=(e)=>{
      e.preventDefault();
      alert(
          `My name is ${data.fulname}. My phone No is  ${data.phone}. My email adress is ${data.email}. This is my Statement ${data.message}.`  
      );
 
  };


    return (
        <>
           <div className="my-5">
           <h1 className="mx-5">Contact US </h1>
           </div>
           <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                       <form onSubmit={FormSubmit}>
                 
                            <div className="mb-3">

                                <label for="exampleFormControlTextarea1 " className="form-label">
                                    Full Name </label>
                                <br />
                                <input type="text"
                                    className="from-control"
                                    id="expFromcontrolInput1"
                                    name="fulname"
                                    value={data.fulname}
                                    onChange={InputEvent}
                                    placeholder="Enter your good name ">
                                </input>
                            </div>
                            <div className="mb-3">

                                <label for="exampleFormControlTextarea1 " className="form-label">
                                    Phone No.</label>
                                <br />
                                <input type="number"
                                    className="from-control"
                                    id="expFromcontrolInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter Your phone number  ">
                                </input>
                            </div>
                            <div className="mb-3">

                                <label for="exampleFormControlTextarea1 " className="form-label">
                                    Email</label>
                                <br />
                                <input type="email"
                                    className="from-control"
                                    id="expFromcontrolInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Email ">
                                </input>
                            </div>
                             
                            <div className="mb-3">
      <label for="exampleFormControlTextarea1 " className="form-label">
  Message</label>
  <textarea
       className="form-control"
       id="examplefromControl1"
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}
       rows="6"
  ></textarea>
  <div className="col-22 my-5">
      <button className="btn btn-outline-primary"> Submit Form</button>
  </div>

                            


                            </div>


                       </form>
                   </div>
               </div>
           </div>
        </>
    )
};
export default  Contact;