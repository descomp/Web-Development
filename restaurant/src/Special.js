import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


import Img61 from "./img/image61.jpg";
import Img62 from "./img/image62.jpg";
import Img63 from "./img/image63.jpg";
import Img64 from "./img/image64.jpeg";
import Img65 from "./img/image65.jpg";
import Venue from "./Venue";


export default function Special() {
    return (
        <div>
            <Navbar />
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Img61" style={{ marginTop: 31, margin: 0, padding: 0, fontFamily: "EB Garamond" }}>
                {/* <img src={Img61} className="img-responsive" /> */}
                <div style={{color : 'white', fontFamily : "EB Garamond"}}>
                    <center>
                    <h1><i><u>Special Events</u></i></h1>
                    <p style={{fontSize : 20}}>"We Add All The Things Which Can Make Your EVENTS SUCCESSFULL"</p>
                    </center>
                </div>



            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 style={{ color: 'rgb(151,97,7)' , marginLeft : 15, fontFamily : "EB Garamond"}}><u>Your events our venues</u></h2>

                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12" style={{ fontFamily: "EB Garamond" }}>
                    <p >The Indian Accent Rsetaurants provides an elegant setting for hosting conferences, meetings, and upscale social events.Our 39,000 sqft of conference and banquet space ranges from Crystal Ballroom to six smaller venues along with Quorum – the club and Plaza Terrace Garden for outdoor functions.</p>
                    <p>Our professional event planners and catering team, specialized menus and exotic décor and wired audio-visual technology promise to exceed your every expectation.</p>

                </div>

                <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12 s1" style={{ fontFamily: "EB Garamond" }}>
                    <p>For any queries, please contact us:</p>
                    <p className="glyphicon glyphicon-earphone">&nbsp; 8967544561</p><br />
                    <p className="glyphicon glyphicon-envelope">&nbsp; indianaccent@gmail.com</p><br />
                    <Link to="/Contact"><input type="submit" className="form control" value="Contact for Event Specialist" />
                    </Link>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <center style={{ fontFamily: "EB Garamond", color: 'rgb(151,97,7)' }}>
                <h2><u>Our Venues</u></h2>
            </center>
            </div>

            <section>
                <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 abc">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ab1">
                <img src={Img62} className="img-responsive" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ab2" style={{ fontFamily: "EB Garamond" }}>
                <center>
                    <h2 style={{ color: 'rgb(151,97,7)' }}>Crystal Ballroom</h2>
                    <p>Exuding sheer luxury, the 6300 square feet pillar less ballroom with a pre-function<br /> area, can also be partitioned into two separate halls. Exotic banquet menus are<br /> crafted by our chefs to suit corporate events, product launches, conferences, seminars,<br /> private parties, weddings, and much more.</p>
                </center>
                {/* <button onClick="ab">hello</button> */}
                {/* <Venue /> */}


            </div>
            </div>
            </section>

            <section>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 abc" style={{ fontFamily: "EB Garamond", marginTop: 40 }}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ab2" style={{ marginTop: 40 }}>
                    <center>
                        <h2 style={{ color: 'rgb(151,97,7)' }}>Plaza Terrace Garden</h2>
                        <p>Beautiful landscaped garden adjoining Crystal Ballroom with a covered buffet area, is ideal for cocktail receptions or outdoor events. It can easily accommodate 250 to 2000 people.</p>
                    </center>
                    {/* <Venue /> */}

                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ab1">
                    <img src={Img63} className="img-responsive" />
                </div>
            </div>
            </section>


            <section>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 abc" style={{ fontFamily: "EB Garamond", marginTop: 40 }}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ab1">
                    <img src={Img64} className="img-responsive" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ab3" style={{ marginTop: 40 }}>
                    <center>
                        <h2 style={{ color: 'rgb(151,97,7)' }}>Quorum</h2>
                        <p>Five premium meeting rooms equipped with all modern amenities and conference facility.</p>
                    </center>
                    {/* <Venue /> */}


                </div>
            </div>
            </section>

            <section>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 abc" style={{ fontFamily: "EB Garamond", marginTop: 40 }}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ab4" style={{ marginTop: 40 }}>
                    <center>
                        <h2 style={{ color: 'rgb(151,97,7)' }}>Regency</h2>
                        <p>Located at the lower lobby level and spread over 15,220 square feet., Regency can accommodate 350 people. For smaller gatherings, it can be further partitioned into five smaller banquets / meeting halls with a central pre-function area.</p>
                    </center>
                    {/* <Venue /> */}

                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ab1">
                    <img src={Img65} className="img-responsive" />
                </div>

            </div>
            </section>
            <Footer />


        </div>
    )
}