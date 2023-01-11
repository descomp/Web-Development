import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
import { useState } from "react";


import axios from "axios";
import Img81 from "./img/image81.jpg";

export default function Reservation() {

    var uri = "http://localhost:5000/";
    var navi = useNavigate();
    const[Nm, setnms] = useState();
    const[con, setcot] = useState();



    function neh(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var Name = data.get("name");
        var Time = data.get("time");
        var Contact = data.get("contact");
        var Person = data.get("person");

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
        if(Contact.length==10){
            // alert("six")
            setcot(Contact);
        }else{
            alert("The length of Contact must be 10 digit");
            e.target.Contact.focus();
            return (false);
        }

        var Ab = data.get("data1");

        var utc = new Date().toJSON().slice(0,10);

        var data1;
        if((Ab == utc) || (Ab>utc)) {
            // alert("current date")
            data1 = Ab

            var bookingdata = { Name1: Name, Ab1 : Ab, Time1: Time, Contact1: Contact, Person1: Person }
        axios.post(uri + "res", bookingdata).then((succ) => {
            alert('data is added');
            console.log(succ);
            console.log("Data successfully send");

        })
        }else if (Ab<utc){
            alert("Please fill the correct date for book a table")
        }else {
            alert("enter date")
        }

        // if(Ab == utc){
        //     alert("current date")
        //     data1 = Ab
        // }else if (Ab<utc){
        //     alert("past date")
        // }else if(Ab>utc){
        //     alert("future date")
        //     data1 = Ab
        //     var bookingdata = { Name1: Name, Ab1 : Ab, Time1: Time, Contact1: Contact, Person1: Person }
        // axios.post(uri + "res", bookingdata).then((succ) => {
        //     alert('data is added');
        //     console.log(succ);
        //     console.log("Data successfully send");

        // })
        // }else {
        //     alert("enter date")
        // }

        

        e.target.reset();

        e.target.name.focus();



    }

    return (
        <div>
            <Navbar />
            <div className="img81">
                <div className="col-lg-5 col-md-6 col-sm-6 col-xs-10" style={{ fontFamily : "EB Garamond" }}>
                    <div className="alert alert-info r1">
                        <h2 className="text-center">Book A Table</h2>
                        <form onSubmit={neh}>

                            <div className="form-group">
                                <label >Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="form-control" type={"text"} placeholder="Enter your name" maxlength="20" name="name" required/>
                            </div>
                            <div className="form-group">
                                <label>Reservation Date:</label>
                                <input className="form-control" type={"date"} name="data1" required/>
                            </div>
                            <div className="form-group">
                                <label>Reservation Time:</label>&nbsp;&nbsp;
                                <input className="form-control" type={"time"} name="time" required/>
                            </div>
                            <div className="form-group ">
                                <label>Contact:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="form-control" type={"number"}  maxlength="10" placeholder="Enter Your Contact Number" name="contact" required />
                            </div>

                            <div className="form-group ">
                                <label>No. of Person:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <select className="form-control" name="person" required>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                 </select>   
                            </div>

                            <div className="form-group">
                                <center>
                                    <input type={'submit'} className="btn btn-primary" value={'Book Now'} />
                                </center>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}