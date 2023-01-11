import './App.css';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Gallery from './Gallery';
import Chef from './Chef';
import Special from './Special';
import Footer from './Footer';
import Venue from './Venue';
import Reservation from './Reservation';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Menu' element={<Menu/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Gallery' element={<Gallery/>} />
          <Route path='/Special' element={<Special/>} />
          <Route path='/Chef' element={<Chef/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Reservation' element={<Reservation/>} />
          <Route path='/Footer' element={<Footer/>} />
          <Route path='/Venue' element={<Venue/>} />
          

          
          


        </Routes>
      </Router>
    </div>
  );
}

export default App;