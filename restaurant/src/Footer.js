export default function Footer() {
    return (
        <div>
            <br/>
            <br/>
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12 f1" style={{fontFamily : "EB Garamond"}}>
                <center>
                    <h2 style={{ color: "gold", fontFamily: "EB Garamond" }}><i><u>Indian Accent Restaurants</u></i></h2>
                </center>
                <div className="col-lg-4 col-sm-4 col-xs-6 col-md-4">
                    <p ><a href="/about" style={{ color: "white" }}>About Us</a></p>
                    <p><a href="/chef" style={{ color: "white" }}>Our Sunshine Chefs</a></p>
                    <p><a href="/gallery" style={{ color: "white" }}>Food Gallery</a></p>
                    <p><a href="/menu" style={{ color: "white" }}>Menu</a></p>

                </div>


                <div className="col-lg-4 col-md-4 col-sm-4 co-xs-6">
                    <p><a href="/special" style={{ color: "white" }}>Special Events</a></p>
                    <p style={{ color: "white" }}>Privacy Policy</p>
                    <p style={{ color: "white" }}>Terms and Conditions</p>
                    <p><a href="/contact" style={{ color: "white" }}>Contact Us</a></p>

                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                    <p style={{ color: "white", fontSize : 25 }}><u>Get in Touch</u></p>
                    <p style={{ color: "white" }}>Indian Accent Restaurants, Thiruvananthapuram, Kerala 695008<br/>
                        Phone : +91 22 6318 2546<br/>
                        Fax: +91 11 4444 1234<br/>
                        E-mail: indianaccent@gmail.com<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}
