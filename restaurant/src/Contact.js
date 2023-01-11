import Navbar from "./Navbar";
import log from "./img/logo.jpg";

import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Contact() {
    var uri = "http://localhost:5000/";
    var navi = useNavigate();
    const[Nm, setnms] = useState();
    const[phon, setcot] = useState();



    function neha1(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var Name = data.get("name");
        var Last = data.get("lastname");
        var Email = data.get("email");
        var Phone = data.get("phone");
        var Message = data.get("message");


        // console.log(email);
        // console.log(password);

        var reg = /[A-Za-z ]/

        for (var i = 0; i <= Name.length; i++) {
            if (reg.test(Name[i])) {
                if (i == Name.length) {
                    // console.log("alphabets")
                    setnms(Name);
                }
                // else{
                // 	alert("enter alphabets only")
                // 	data.get('name')
            } else {
                alert("please enter alphabets")
                e.target.name.focus();
                return (false);
            }

        }

        if(Phone.length==10){
            // alert("six")
            setcot(Phone);
        }else{
            alert("please fill 10 digit phone number");
            e.target.Phone.focus();
            return (false);
        }

        var contactdata = { email: Email, name: Name, last : Last, message: Message, phone : Phone }
        // axios.post(uri + "contact", contactdata).then((succ) => {

        //     console.log("Data successfully send");
        //     if (succ.data = 'added') {
        //         alert('Data is successfully added')
        //     } else {
        //         alert('Data is not added');
        //     }
        // })
        e.target.reset();

        e.target.email.focus();
    }
    return (
        <div>
            <Navbar />

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 b2" style={{ marginTop: 50, fontFamily: "EB Garamond" }}>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 img2">
                    <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12 ">
                        <div className="container">

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 r1">
                                <center>
                                    <h2>Contact Us</h2>
                                </center>
                                <form onSubmit={neha1}>
                                    <div className="form-group">
                                        <input type={'text'} name='name' className="form-control" maxlength="20" placeholder="Full Name" required/><br/>

                                        <input type={'text'} name='lastname' className="form-control" maxlength="20" placeholder="Last Name" required/><br/>

                                        <input type={'text'} name='email' className="form-control" placeholder="Email" required/><br/>

                                        <input type={'phone'} name='phone' className="form-control" maxlength="10" placeholder="Phone Number" required/><br/>

                                        <label style={{ position: 'relative' }}>How can we help ? : </label><textarea className="form-control" placeholder="How can we help?" name="message" style={{ resize: 'none' }} rows={5} required></textarea><br/>

                                        <input type={'submit'} className="btn btn-primary" value={'Submit Enquiry'} />
                                    </div>

                                </form>
                            </div></div></div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" >
                    <img src={log} className="img-responsive" style={{ marginTop: 20 }} />
                    <h2 style={{ color: "rgb(222,222,222)" }}>Indian Accent Restaurants</h2>
                    <p style={{ color: "rgb(222,222,222)" }}>Hours of Operation:</p>
                    <p style={{ color: "rgb(176,144,68)" }}>Lunch</p>
                    <p style={{ color: "rgb(222,222,222)" }}>Monday - Sunday</p>
                    <p style={{ color: "rgb(222,222,222)" }}>12:00pm - 4:00pm</p><br></br>

                    <p style={{ color: "rgb(176,144,68)" }}>Dinner</p>
                    <p style={{ color: "rgb(222,222,222)" }}>Monday - Sunday</p>
                    <p style={{ color: "rgb(222,222,222)" }}>7:00pm - 1:30am</p><br></br>

                    {/* <p style={{ color: "rgb(176,144,68)" }}></p>
                    <p style={{ color: "rgb(222,222,222)" }}>Monday - Sunday</p>
                    <p style={{ color: "rgb(222,222,222)" }}>11am - 11:30pm</p><br></br> */}

                    <p style={{ color: "rgb(222,222,222)" }}>General Enquiries</p>
                    <p style={{ color: "rgb(176,144,68)" }}>Phone : +91 22 6318 2546</p>
                    <p style={{ color: "rgb(176,144,68)" }}>Email : indianaccent@gmail.com</p>
                </div>

            </div>






        </div>
    )
}