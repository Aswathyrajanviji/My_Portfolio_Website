
import React from 'react';
 import img1 from '../images/aswathy1.jpg';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

 const Home = () => {
   return (
    <div className="home">
       <div className="overlay">
       <div className="content">
          <img src={img1} className="profile-photo" alt="Aswathy" />
          <h1>Aswathy R V</h1>
          <h2>Frontend Developer</h2>
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
  );
}

 export default Home;

