import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


import axios from "axios";

export default function Login() {
    var uri = "http://localhost:5000/";
    var navi = useNavigate();


    function neha(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var email = data.get('id');
        var password = data.get('password');

        // console.log(email);
        // console.log(password);

        var udat = { Email: email, Password: password }
            //cosole.log(logindata);
        
        axios.post(uri + "login", udat).then((succ) => {
            console.log(succ)
            

        // var logindata = { Email: email, Password: password }
        // axios.post(uri + "login", logindata).then((succ) => {
        //     console.log("Data successfully send");
        // })

        if (succ.data ) {

            alert("User Login is successfully")
            // console.log(succ.data._id);
            localStorage.setItem("useridlocal", succ.data._id);
            localStorage.setItem("UName",succ.data.Username);
            console.log(succ.data.Username)
            navi("/")

        } else {
            alert("Please Register First");
        }

    })

        e.target.reset();

        e.target.email.focus();
    
}

return (
    <>
            <Navbar />
            <div className="img1">
                <div className="col-lg-5 col-md-6 col-sm-6 col-xs-10">
                    <div className="alert alert-info r1">
                        <h2 className="text-center">Member Login</h2>
                        <form onSubmit={neha}>

                            <div className="form-group">
                                <input type={'email'} name='id' className="form-control" placeholder="E-mail" required />
                            </div>

                            <div className="form-group">
                                <input type={'password'} name='password' className="form-control" placeholder="Password" maxlength="8" required/>
                            </div>

                            <div className="form-group">
                                <input type={'submit'} className="btn btn-primary" value={'Login'} />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )



}