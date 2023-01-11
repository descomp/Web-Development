import Navbar from "./Navbar";
import Footer from "./Footer";

import img from './img/cold.webp'
import Img1 from './img/image7.jpg';
import Img2 from './img/image8.jpg';
import Img3 from './img/image9.jpg';
import Img50 from './img/image50.jpg';
import Img51 from './img/image51.jpg';
import Img52 from './img/image52.jpg';
import Img53 from './img/image53.jpg';
import Img54 from './img/image54.jpg';
import Img55 from './img/image55.jpg';
import Img56 from './img/image56.jpg';
import Img57 from './img/image57.jpg';
import Img58 from './img/image58.jpg';
import Img59 from './img/image59.jpg';
import Img60 from './img/image60.jpg';
import Img82 from './img/image82.webp';
import Img83 from './img/image83.jpg';



import { Link } from "react-router-dom";



export default function Home() {
    return (
        <>
             <Navbar/>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop: 50, fontFamily:"EB Garamond" , margin : 0, padding : 0}}>
                    <video loop autoPlay muted style={{width:'100%', marginTop : 50}}>
                        <source src="https://villamaya.in/wp-content/themes/villamayain/assets/videos/vm_main.mp4" type="video/mp4" />
                    </video>
                    
                    <center>
                        <h2 style={{fontFamily:"EB Garamond", color: "rgb(176,144,70)"}}>INDIAN ACCENT RESTAURANTS IS AN ILLUSION</h2>
                        <p>THESE MOMENTS IN LIFE ARE FLEETING GLIMPSES PASSING JOYS AND SORROWS BUT BEYOND THESE VEILED PERCEPTIONS IS A FAR DEEPER TRUTH</p>
                        <p>Indian Accent Restaurants is an upscale award winning restaurant showcasing global cuisine presented in an elegant, restored 18th-century home with a garden patio.</p>
                    </center>
                    
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily:"EB Garamond"}}>
                    <div className="container">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <img src={Img50} className="img-responsive" />
                            <h2 style={{fontFamily:"EB Garamond", color: "rgb(176,144,70)"}}>THE PALACE</h2>
                            <p style={{fontFamily:"EB Garamond"}}>Welcome to Indian Accent Restaurants, a lovingly restored 18th century Dutch manor that once enjoyed the attention of the royal house of Travancore. In the spirit of its noble heritage it continues to exude timeless elegance through contemporary design and haute cuisine.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" style={{fontFamily:"EB Garamond"}}>
                            <img src={Img51} className="img-responsive" />
                            <h2 style={{fontFamily:"EB Garamond", color: "rgb(176,144,70)"}}>THE CUISINE</h2>
                            <p>Trivandrum’s culinary history inspired us to combine traditional cuisine with contemporary style. The menu presents a wide repertoire of cuisine from the countries that historically traded with Kerala. The menu is a gastromonical journey through Kerala, India, Morocco and Italy. Each dish has been carefully handpicked for its cultural heritage, authenticity and resonance with the tastes of Kerala and is presented in a multisensory delight of exciting flavours, textures and aromas.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" style={{fontFamily:"EB Garamond"}}>
                            <img src={Img52} className="img-responsive" />
                            <h2 style={{fontFamily:"EB Garamond", color: "rgb(176,144,70)"}}>THE MYSTIQUE</h2>
                            <p>The famous Arumana Ammaveedu was one of four ammaveedus to rise to prominence towards the end of the 18th century. Ammaveedus were the residences of the consorts of the Maharajahs of Travancore in Trivandrum. The royal consorts were given the title Panapillai Amma and were entitled to certain royal privileges except the fortune of inheriting the throne.</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily:"EB Garamond", margin : 0, padding: 0}}>
                    <video loop autoPlay muted style={{width:'100%'}}>
                        <source src="https://villamaya.in/wp-content/themes/villamayain/assets/videos/vm_food.mp4" type="video/mp4"/>
                    </video>
                    <div className="container">
                        <center style={{fontFamily:"EB Garamond", color: "rgb(176,144,70)"}}>
                            <h2>Experience a fully restored 18th century Dutch Manor.</h2>
                        </center>
                            <p>Welcome to Indian Accent Restaurants, a lovingly restored 18th century Dutch manor that once enjoyed the attention of the royal house of Travancore. In the spirit of its noble heritage it continues to exude timeless elegance through contemporary design and haute cuisine.</p>
                            <p>Indian Accent Restaurants is a treasure trove of subtle sensory delights; a theatre of the senses meticulously crafted to offer you an escape into serenity. Authentic traditional cuisines from around the world are exquisitely plated to harmonise with its classical architecture, minimal style and carefully selected art and craft pieces, creating an experience of beauty and grace.</p>
                </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="container">
                    <center>
                        <img src={Img53} className="img-responsive" />
                
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" style={{marginTop:20}}>
                             <img src={Img54}  style={{width : "80%"}} />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" style={{marginTop:20}}>
                             <img src={Img55} style={{width : "80%"}} />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" style={{marginTop:20}}>
                             <img src={Img56} style={{width : "80%"}} />
                        </div>

                    </center>
                    </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily:"EB Garamond"}}>
                    <div className="container">
                        <center>
                            <h2 style={{color: "rgb(176,144,70)"}}>Experience Award Winning Cuisine.</h2>
                        </center>
                        <p>Trivandrum has been at the centre of the spice trade for over three millennia and has contributed unique and exotic flavours to global cuisine.</p>
                        <p>Trivandrum’s culinary history inspired us to combine traditional cuisine with contemporary style. The menu presents a wide repertoire of cuisine from the countries that historically traded with Kerala. The menu is a gastronomical journey through Kerala, India, Morocco and Italy. Each dish has been carefully handpicked for its cultural heritage, authenticity and resonance with the tastes of Kerala and is presented in a multisensory delight of exciting flavours, textures and aromas.</p>
                        <p>At Indian Accent Restaurants, food is more than just the taste – It is, along with an exhilarating experience, a journey into the past. Not just the preparation, the presentation too reminds one of India’s rich cultural heritage.</p>

                    </div>
                </div>
                


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="container">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <img src={Img57} style={{width : "80%"}}/>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <img src={Img58} style={{width : "80%"}} />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <img src={Img59} style={{width : "80%"}} />
                        </div>

                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily:"EB Garamond"}}>
                    <div className="container">
                        <center>
                            <h2 style={{color: "rgb(176,144,70)"}}>Experience the Mystique being the legacy.</h2>
                            <p>According to legend, the site of Thiruvananthapuram was once a jungle known as Anantan Kādu, this place gained prominence as the abode of Lord Padmanabha. The history of Sree Padmanabhaswamy Temple dates back to 8th century, the presiding deity of this temple is Lord Vishnu, reclining on Anantha, the hooded Serpent.</p>
                        </center>
                        <img src={Img60} className="img-responsive" />
                    </div>  

                </div>
                <div className="col-lg-12">
                    <div className="container">
                <div className="col-lg-6 Img82" style={{marginTop : 20}}>
                    <Link to ="/Reservation" className="nrr"><h1  className="nr" style={{color : "white", fontFamily : "EB Garamond", marginTop : "30%", textDecoration : "None"}}>
                           <i>Book Your Table</i></h1>
                        </Link>
                    </div>

                    <div className="col-lg-6 Img83" style={{marginTop : 20}}>
                    <Link to ="/Contact" className="nrr"><h1  className="nr" style={{color : "white", fontFamily : "EB Garamond", marginTop : "30%"}}>
                            <i>Contact Us</i></h1></Link>
                    </div>
                    </div>
                </div>



                    
                




                <Footer />
             </>
    )
}
