import Navbar from "./Navbar";
import Footer from "./Footer";
import Img29 from './img/image35.webp';
import Img30 from './img/image36.png';
import Img31 from './img/image37.png';
import Img32 from './img/image38.png';
import log from "./img/logo.jpg";
import log1 from "./img/logo1.png";





export default function About() {
    return ( 
        <div>
        
        <Navbar/>
        
        <div style = {{ marginTop: 50 } } > { /* <img src={Img29} className="img-responsive" /> */ } 
        <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
        
        <div className = "container col-lg-12" >

        
        </div> 
        </div> 
        <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12 Img29" >




        
        <div className = "col-lg-12 col-md-12 col-xs-12 col-sm-12" style = {{ fontFamily: "EB Garamond", color: 'white', fontSize: 20 } } >
        
        <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-6" style = {{ marginTop: 20 } } >
        <img src = { log1 } width = { "60%"} style={{marginLeft : 100}}/> 
        </div> 
        <h1> < i > < u > Indian Accent Restaurants </u></i> </h1> 
        <p style = {{ textAlign: "justify" }} > Indian Accent Restaurants is knownfor its 'warm décor, authentic Indian cuisine, and time honored recipes giving a big city experience in a welcoming environment.Stepping in the front door, customers are immediately greeted with delicious fragrances of coriander, ginger, turmeric and more; since carefully blended spices are infused into“ real” Indian cuisine.The atmosphere is soothing with Indian and Middle Eastern music playing quietly while customers gaze at rich tapestries and painted fabrics."People feel really comfortable when they come here, because we are a family owned restaurant, and we are dedicated to delivering the finest of Indian food with the freshest ingredients "says owner Neha."They trust our quality of food, and we have many repeat customers because they know we are a family owned and operated restaurant.”Our customers enjoy India Accent Restaurants famous mesquite - charcoal lamb chops, as well as various seafood specialties.(We also have vegetarian, gluten free, and dairy free entrees.) We look forward to serving you soon.(Dine in , or order on - line for fast carry out.) Check out our Times Call interview. </p>

        <hr/>
        <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12" >
        <center >
        <h1 > <i> <u> BEST FOR... </u></i> </h1> </center> 
        <ul style = {{ display: 'flex', justifyContent: 'space-evenly', marginTop: 20, fontSize: 25 } } >
        
        <li> GOOD FOOD </li> 
        <li> HOT VENUES</li> 
        <li> SPECIAL OCCASION </li> 
        </ul> 
        <hr/>
        
        <center>
        
        <h1> <u> <i> We are available </i></u> </h1> 
        </center> 

        
        <ul style = {{ display: 'flex', justifyContent: 'space-evenly', marginTop: 20, fontSize: 20 } } >

        
        <li> Lunch: 11: 00 am to 2: 00 pm(Tuesday - Sunday) </li> 
        <li> Dinner: 5: 00 pm to 9: 00 pm(Tuesday - Sunday) </li> 
        </ul> 
        </div> 
        </div>

        
        </div> 
        </div>






        {
            /* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="container">
                                <img src={Img29} className="img-responsive" />
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop:50}}>
                                    <img src={Img30} className="img-responsive" />
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop:'60px', fontSize:20}}>
                                    <h2>Design & Detailing</h2>
                                    <p>An imposing structure of timeless luxury & inspiring architecture, the restaurant rises up in steps echoing the design of a Buddhist stupa. The lobby recreates the paneled dome of a chaitya, or Buddhist hall of worship. Its glowing mural sensitively depicting the great parade of life is the cynosure of all eyes. A towering bronze sculpture of Emperor Ashoka in the gardens portrays him in his transformation from a warrior to a philosopher king. The vases, figurines and pieces of sculpture take forward the Mauryan saga. On display is a priceless collection of art by leading Indian artists ranging from Krishen Khanna, M F Husain, Tyeb Mehta & more</p>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop:'50px'}}>
                            <div className="container">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop:'80px', fontSize:20}}>
                                    <h2>CUISINE</h2>
                                    <p>Housing the Globally acclaimed Bukhara & Dum Pukht, the hotel is a gourmet destination in itself. It also offers classic Italian and avant garde East Asian creations, alongside global favorites, served with style and panache. The majestic lounges & elegant bars are the perfect place to unwind and converse with a superb collection of global beverages.</p>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <img src={Img31} className="img-responsive" />
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop:'50px'}}>
                            <div className="container">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <img src={Img32} className="img-responsive" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop:'60px', fontSize:20}}>
                                    <h2>WELLBEING</h2>
                                    <p>Rooted in traditional Indian philosophies of health, wellness and inner calm, Kaya Kalp – the Spa opens its doors to the world of Ayurvedic and holistic therapies designed to de-stress and detox while relaxing and rejuvenating every guest. The hotel facilitates pursuit of holistic well-being & fitness by offering a conducive sleep environment, healthy cuisine offerings, personalized fitness regimes, and exclusive amenities & facilities.</p>
                                </div>
                            </div>
                        </div> */
        }




        
        <Footer/>


        
        </div>
    )
}