import Navbar from "./Navbar";
import Footer from "./Footer";

import img1 from './img/coffee.webp';
import img2 from './img/cold.webp';
import img3 from './img/veg.jpg';
import img4 from './img/burger.webp';
import img5 from './img/ice.jpg';

export default function Menu() {
    return (
        <div>
            <Navbar />
            <div className="mimg1">
                <div className="b1 container">
                    <h1 align="center" style={{ marginTop: -80, color: "white", fontFamily: "EB Garamond" }}><i><u>Our MENU</u></i></h1>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <center style={{fontFamily : "EB Garamond", color : "rgb(176,144,68)"}}><h2><i><u>Beverages</u></i></h2></center>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ border: '2px solid rgb(176,144,68', fontFamily: "EB Garamond" }}>
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12" style={{ display: 'flex', flexDirection: 'column' }} >
                            <h1 className="text-center" style={{ color: "rgb(176,144,68)" }}></h1>
                            <div className="" style={{ color: "black", display: 'flex', justifyContent: 'space-between' }}>

                                <ul style={{ color: "rgb(222,222,222)" }}>
                                    <li>Cappuccino</li>
                                    <li>Cappuccino (King)</li>
                                    <li>Cafe Latte</li>
                                    <li>Coconut Milk Latte</li>
                                    <li>Cafe Mocha</li>
                                    <li>Cafe Frappe </li>
                                    <li>Dark Frappe </li>
                                    <li>Kaapl Nirvana Vanilla Cream</li>
                                    <li>Kaapl Nirvana Cocoa Cream</li>

                                </ul>
                                <ul style={{ color: "rgb(222,222,222)" }}>
                                    <li>RS.149/-</li>
                                    <li>RS.159/-</li>
                                    <li>RS.179/-</li>
                                    <li>RS.199/-</li>
                                    <li>RS.169/-</li>
                                    <li>Rs.179/-</li>
                                    <li>Rs.229/-</li>
                                    <li>Rs.239/-</li>
                                    <li>Rs.249/-</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ marginTop: 25, marginLeft: 40 }}>
                            <img src={img1} width={500} />
                        </div>
                    </div>
                    </div>



                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <center style={{fontFamily : "EB Garamond", color : "rgb(176,144,68)"}}><h2><i><u>Soft Drinks</u></i></h2></center>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ border: '2px solid rgb(176,144,68)', marginTop: 20, fontFamily: "EB Garamond" }} >
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12" style={{ display: 'flex', flexDirection: 'column' }} >
                            <h1 className="text-center" style={{ color: "rgb(176,144,68)" }}></h1>
                            <div className="" style={{ color: "black", display: 'flex', justifyContent: 'space-between' }}>
                                <ul style={{ color: "rgb(222,222,222)" }} >
                                    <li>Chocolate Shake</li>
                                    <li>Mango Thick Shake</li>
                                    <li>Strawberry Thick Shake</li>
                                    <li>Berry Blast Thick Shake</li>
                                    <li>Raw Mango Fruit Splash Regspanar</li>
                                    <li>Coke Regliar</li>
                                    <li>Fanta Regspanar</li>
                                    <li>Sprite Regspanar</li>
                                    <li>Thumbs Up Regspanar</li>

                                </ul>

                                <ul style={{ color: "rgb(222,222,222)" }}>
                                    <li>Rs.129/-</li>
                                    <li>Rs.149/-</li>
                                    <li>Rs.169/-</li>
                                    <li>Rs.99/-</li>
                                    <li>Rs.49/-</li>
                                    <li>Rs.79/-</li>
                                    <li>Rs.79/-</li>
                                    <li>Rs.79/-</li>
                                    <li>Rs.79/-</li>

                                </ul>


                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ marginLeft: 40, marginTop: 25 }}>
                            <img src={img2} width={500} />
                        </div>
                    </div>
                    </div>



                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <center style={{fontFamily : "EB Garamond", color : "rgb(176,144,68)"}}><h2><i><u>Main Course</u></i></h2></center>
                        
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ border: '2px solid rgb(176,144,68)', fontFamily: "EB Garamond", marginTop: 20 }}>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12" style={{ display: 'flex', flexDirection: 'column' }} >
                                <h1 className="text-center" style={{ color: "rgb(176,144,68)" }}></h1>
                                <div className="" style={{ color: "black", display: 'flex', justifyContent: 'space-between' }}>

                                    <ul style={{ color: "rgb(222,222,222)" }}>
                                        <li>Yellow Dal</li>
                                        <li>Dal Makhini</li>
                                        <li>Aloo Gobi</li>
                                        <li>Malai Kofta</li>
                                        <li>Matter Paneer</li>
                                        <li>Chilli Paneer</li>
                                        <li>Palak Paneer</li>
                                        <li>Mushroom Mutter</li>
                                        <li>Shahi Paneer</li>
                                        <li>Vegetable Biryani</li>
                                        <li>Kashmiri Pilou</li>

                                    </ul>

                                    <ul style={{ color: "rgb(222,222,222)" }}>
                                        <li>Rs.749/-</li>
                                        <li>Rs.849/-</li>
                                        <li>Rs.949/-</li>
                                        <li>Rs.1199/-</li>
                                        <li>Rs.1549/-</li>
                                        <li>Rs.1399/-</li>
                                        <li>Rs.1299/-</li>
                                        <li>Rs.999/-</li>
                                        <li>Rs.849/-</li>
                                        <li>Rs.789/-</li>
                                        <li>Rs.1259/-</li>


                                    </ul>


                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ marginLeft: 40, marginTop: 25 }}>
                                <img src={img3} width={500} />
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <center style={{fontFamily : "EB Garamond", color : "rgb(176,144,68)"}}><h2><i><u>Starter</u></i></h2></center>
                    

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ border: '2px solid rgb(176,144,68)', marginTop: 20, fontFamily: "EB Garamond" }}>
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12" style={{ display: 'flex', flexDirection: 'column' }} >
                            <h1 className="text-center" style={{ color: "rgb(176,144,68)" }}></h1>
                            <div className="" style={{ color: "black", display: 'flex', justifyContent: 'space-between' }}>

                                <ul style={{ color: "rgb(222,222,222)" }}>
                                    <li>Spicy Paneer Burger</li>
                                    <li>Filet-O-Fish Burger</li>
                                    <li>Veggie Burger</li>
                                    <li>Aloo Tikki Burger</li>
                                    <li>Spicy Paneer Wrap</li>
                                    <li>Noodles</li>
                                    <li>Manchurian</li>
                                    <li>Reqular Pizza</li>
                                    <li>Cheese Pizza</li>
                                    <li>Cheese and Corn Pizza</li>
                                    <li>Spring Rolls</li>

                                </ul>

                                <ul style={{ color: "rgb(222,222,222)" }}>
                                    <li>Rs.118/-</li>
                                    <li>Rs.129/-</li>
                                    <li>Rs.99/-</li>
                                    <li>Rs.159/-</li>
                                    <li>Rs.179/-</li>
                                    <li>Rs.249/-</li>
                                    <li>Rs.279/-</li>
                                    <li>Rs.299/-</li>
                                    <li>Rs.349/-</li>
                                    <li>Rs.389/-</li>
                                    <li>Rs.299/-</li>
                                </ul>



                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ marginLeft: 40, marginTop: 25 }}>
                            <img src={img4} width={500} />
                        </div>
                    </div>
                    </div>
                    


                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <center style={{fontFamily : "EB Garamond", color : "rgb(176,144,68)"}}><h2><i><u>Desserts</u></i></h2></center>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ border: '2px solid rgb(176,144,68)', marginTop: 20, fontFamily: "EB Garamond" }}>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12" style={{ display: 'flex', flexDirection: 'column' }} >
                                <h1 className="text-center" style={{ color: "rgb(176,144,68)" }}></h1>
                                <div className="" style={{ color: "black", display: 'flex', justifyContent: 'space-between' }}>

                                    <ul style={{ color: "rgb(222,222,222)" }}>
                                        <li>Bananas foster</li>
                                        <li>Kesar Pista</li>
                                        <li>Blueberry in Cone</li>
                                        <li>Cherry in Cone</li>
                                        <li>Chocolate Chip Cookie Dough</li>
                                        <li>Dulce De Leche</li>
                                        <li>Raspberry Ripple</li>

                                    </ul>


                                    <ul style={{ color: "rgb(222,222,222)" }}>

                                        <li>Rs.129/-</li>
                                        <li>Rs.149/-</li>
                                        <li>Rs.179/-</li>
                                        <li>Rs.199/-</li>
                                        <li>Rs.239/-</li>
                                        <li>Rs.249/-</li>
                                        <li>Rs.299/-</li>
                                    </ul>


                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ marginLeft: 40, marginTop: 25 }}>
                                <img src={img5} width={500} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

