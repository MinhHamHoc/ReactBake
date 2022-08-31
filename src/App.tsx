import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Header from './Component/Header';
import Carousel from './Component/Carousel';
import Intro from './Component/Intro';
import Service from './Component/Service';
import Gallery from './Component/Gallery';
import Feedback from './Component/Feedback';
import Contact from './Component/Contact';



function App() {
  return (
    <>
      <header>
        <div className="header__content">
          <p>BAKE</p>
          <nav>
            <ul id="mainNav">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/services">SERVICE</Link></li>
              <li><Link to="/products">PRODUCT</Link></li>
              <li><Link to="/feedback">FEEDBACK</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Carousel />} />
        <Route path='/about' element={<Intro />} />
        <Route path='/services' element={<Service />} />
        <Route path='/products' element={<Gallery />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <footer>
        <div className="footer__main">
          <div className="footer__item">
            <h3>About Us</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, natus illo. Consequatur maiores veniam
              est.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, natus illo. Consequatur maiores veniam
              est.</p>
            <div className="footer__socials">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-google-plus-g" />
              <i className="fab fa-twitter" />
            </div>
          </div>
          <div className="footer__item">
            <h3>Working Time</h3>
            <div className="footer__time">
              <p>Monday</p>
              <p>9h30 - 18h30</p>
            </div>
            <div className="footer__time">
              <p>Tuesday </p>
              <p>9h30 - 18h30</p>
            </div>
            <div className="footer__time">
              <p>Wednesday</p>
              <p>9h30 - 18h30</p>
            </div>
            <div className="footer__time">
              <p>Thursday</p>
              <p>9h30 - 18h30</p>
            </div>
            <div className="footer__time">
              <p>Friday</p>
              <p>9h30 - 18h30</p>
            </div>
            <div className="footer__time">
              <p>Saturday</p>
              <p>9h30 - 18h30</p>
            </div>
            <div className="footer__time">
              <p>Sunday</p>
              <p>9h30 - 18h30</p>
            </div>
          </div>
          <div className="footer__item">
            <h3>Twitter Us</h3>
            <p>ultricies nec, pellentesque eu, pretium quis</p>
            <p>ultricies nec, pellentesque eu, pretium quis</p>
            <p>ultricies nec, pellentesque eu, pretium quis</p>
            <p>ultricies nec, pellentesque eu, pretium quis</p>
          </div>
          <div className="footer__item">
            <h3>SUBSCRIBE US</h3>
            <form className="footer__sub">
              <input type="email" placeholder="name@example.com" />
              <button type="submit">Send</button>
            </form>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim soluta at voluptate vitae quae
              omnis tempora, voluptas sint corrupti.</p>
          </div>
        </div>
        <div className="footer__copyright">
          <p>© 2020 Lorem ipsum dolor sit amet. | Design by <span>Tran Anh Minh</span></p>
        </div>
      </footer>
    </>
  );
}

export default App;
