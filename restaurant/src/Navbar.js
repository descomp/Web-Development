import { Link } from 'react-router-dom';
// import log from './img/logo1.jpg';

import { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from './img/logo.jpg'


export default function Navbar() {
    var uri ="http://localhost:5000";
         var userid = localStorage.getItem('useridlocal');
         var uname = localStorage.getItem("UName");

         console.log(userid)
         const [id, setid] = useState(false);
         function logout() {
             alert("logout");
             localStorage.removeItem("useridlocal");
             setid(false)
         }
         useEffect(() => {
             if (userid) {
                 setid(true)
             }
         }, [userid])




    return (
        <div className="navbar navbar-fixed-top n1" style={{fontFamily : "EB Garamond", fontSize : 23}}>
            <div className="container-fluid  ">
                <div className='navbar-header'>
                    <button type="button" class="navbar-toggle white" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar white"></span>
                        <span class="icon-bar white"></span>
                        <span class="icon-bar white"></span>
                    </button>
                    <div className='navbar-brand'>
                        {/* <b>logo</b> */}
                        {/* <img src={log} /> */}
                        {/* <a href=""><img src={img1} width={50} height={40} style={{marginTop:-9}}/></a> */}

                    </div>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav" style={{ marginLeft: '1%' }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About Us</Link></li>
                        <li><Link to="/Menu">Menu</Link></li>
                        <li><Link to="/Chef">Chef</Link></li>
                        <li><Link to="/Gallery">Gallery</Link></li>
                        <li><Link to="/Special">Special Event</Link></li>
                        <li><Link to="/Contact">Contact us</Link></li>
                    </ul>
                    {/* {id ? (
                        <ul className='nav navbar-nav navbar-right'>
                            <li style={{color : 'white', marginTop : 10, fontSize : 20}} className="glyphicon glyphicon-user">&nbsp;{uname}</li>

                            <li><Link to="/Reservation">Reservation</Link></li>

                            <li onClick={logout}><Link to="">Logout</Link></li>
                        </ul>
                    ) : (
                        <ul className='nav navbar-nav navbar-right'>
                            <li className="hv"><Link to="/Register">Register</Link></li>
                            <li className="hv"><Link to="/login">Login</Link></li>
                        </ul>
                    )} */}

                    
                    {/* <ul className="nav navbar-nav navbar-right" >
                        <li><Link to="/Register">Register</Link></li>
                        <li><Link to="/Login">Login</Link></li>

                    </ul> */}
                </div>
            </div>
        </div >
    )

}




