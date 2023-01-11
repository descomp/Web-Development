import Navbar from "./Navbar";

import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Register() {
    var uri = "http://localhost:5000/";

    var navi = useNavigate()
    const[Nm, setnms] = useState();

    function neha(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var name = data.get('name');
        var username = data.get('username');
        var email = data.get('email');
        var password = data.get('password');
        var password2 = data.get('password2');
        // console.log(password + password2)

        var reg = /[A-Za-z ]/

        for (var i = 0; i <= name.length; i++) {
            if (reg.test(name[i])) {
                if (i == name.length) {
                    // console.log("alphabets")
                    setnms(name);
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

        if (password == password2) {
            console.log("same password")

            var udata = {
                Name: name,
                Username: username,
                Email: email,
                Password1: password,
                password2: password2
            }           

            axios.post(uri+"getusers",udata).then((succ)=>{
                // console.log(succ.data)
                if(succ.data == ''){
                  console.log("no user of this email")
                  axios.post(uri+"register",udata).then((succ)=>{
                      // console.log(succ.data)
                      if(succ.data == "added"){
                        alert("registration successful");
                          axios.post(uri+"getusers",udata).then((succ)=>{
                            console.log(succ.data._id)
                            localStorage.setItem("User",succ.data._id);
                            navi("/login")
                          })
                      }
                  })
                }else{
                //   console.log("having user of this email")
                    alert("Already registered")
                }
              })
          

       



            // var registerdata = { Name: name, Username: username, Email1: email, Password1: password,Password2:password2 }
            // axios.post(uri + "register", registerdata).then((succ) => {
            //     console.log("Data successfully send");
            // })

        } else {
            // console.log("not same password")
            alert("please enter correct password")
        }

        // console.log(name);
        // console.log(username);
        // console.log(email);
        // console.log(password);
        // console.log(password);




        e.target.reset();

        e.target.name.focus();

    }

    return (
        <>
            <Navbar />

            <div className="img1">


                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10 ">
                    <div className="alert alert-info r1">
                        <center><h2>Registration</h2></center>

                        <form onSubmit={neha}>
                            <div className="form-group">
                                <input type={'text'} name='name' className="form-control" maxlength="20" placeholder="Full Name" required />
                            </div>

                            <div className="form-group">
                                <input type={'text'} name='username' className="form-control" maxlength="20" placeholder="Username" required/>
                            </div>

                            <div className="form-group">
                                <input type={'text'} name='email' className="form-control" placeholder="Email" required/>
                            </div>

                            <div className="form-group">
                                <input type={'password'} name='password' className="form-control" maxlength="8" placeholder="Password" required />
                            </div>

                            <div className="form-group">
                                <input type={'password'} name='password2' className="form-control" maxlength="8" placeholder="Confirm Password" required />
                            </div>

                            <div className="form-group">
                                <input type={'submit'} className="btn btn-primary" value={'Submit'} />
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )



}
























// import Navbar from "./Navbar";

// import axios from 'axios';

// export default function Register() {
//     var uri = "http://localhost:5000/";


//     function neha(e) {
//         e.preventDefault();
//         var data = new FormData(e.currentTarget);
//         var name = data.get('name');
//         var username = data.get('username');
//         var email = data.get('email');
//         var password = data.get('password');
//         var password2 = data.get('password2');
//         // console.log(password + password2)

//         if (password == password2) {
//             console.log("same password")
//             var registerdata = { Name: name, Username: username, Email1: email, Password1: password, Password2: password2 }
//             axios.post(uri + "register", registerdata).then((succ) => {
//                 console.log("Data successfully send");
//             })

//         } else {
//             // console.log("not same password")
//             alert("please enter correct password")
//         }

//         // console.log(name);
//         // console.log(username);
//         // console.log(email);
//         // console.log(password);
//         // console.log(password);




//         e.target.reset();

//         e.target.name.focus();

//     }

//     return ( <
//         >
//         <
//         Navbar / >

//         <
//         div className = "img1" >


//         <
//         div className = "col-lg-6 col-md-6 col-sm-6 col-xs-10 " >
//         <
//         div className = "alert alert-info r1" >
//         <
//         center > < h2 > Registration < /h2></center >

//         <
//         form onSubmit = { neha } >
//         <
//         div className = "form-group" >
//         <
//         input type = { 'text' }
//         name = 'name'
//         className = "form-control"
//         placeholder = "Full Name" / >
//         <
//         /div>

//         <
//         div className = "form-group" >
//         <
//         input type = { 'text' }
//         name = 'username'
//         className = "form-control"
//         placeholder = "Username" / >
//         <
//         /div>

//         <
//         div className = "form-group" >
//         <
//         input type = { 'text' }
//         name = 'email'
//         className = "form-control"
//         placeholder = "Email" / >
//         <
//         /div>

//         <
//         div className = "form-group" >
//         <
//         input type = { 'password' }
//         name = 'password'
//         className = "form-control"
//         placeholder = "Password" / >
//         <
//         /div>

//         <
//         div className = "form-group" >
//         <
//         input type = { 'password' }
//         name = 'password2'
//         className = "form-control"
//         placeholder = "Confirm Password" / >
//         <
//         /div>

//         <
//         div className = "form-group" >
//         <
//         input type = { 'submit' }
//         className = "btn btn-primary"
//         value = { 'Submit' }
//         /> <
//         /div>

//         <
//         /form> <
//         /div> <
//         /div>

//         <
//         /div> <
//         />
//     )



// }