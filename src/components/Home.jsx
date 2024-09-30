
import React from 'react';
 import img3 from '../images/logo.jpg';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

 const Home = () => {
   return (
    <div>
    <div className="home">
    <div className="overlay"> 
       <div className="content">
          <img src={img3} className="profile-photo" alt="" /> 
          <h1 className='c'>Aswathy R V</h1>
          <h2 className='c1'>Frontend Developer</h2>
          </div>
      </div>
     {/* Footer Section */}
       <footer className="footer">
         <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faInstagram} size="2x" />
         </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
         </a>
           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
         </a>
           <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faWhatsapp} size="2x" />
           </a>
         </div>
         <p>&copy; 2024 Aswathy R V. All rights reserved.</p>
       </footer>
     </div>
    </div> 
  );
}

 export default Home;

