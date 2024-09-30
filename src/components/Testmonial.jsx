

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Testmonial.css';
import img2 from '../images/profile.jpg';

const Testimonials = () => {
  return (
    <div className="testimonial container text-center bg-light p-5 rounded">
      <h2 className="mb-4 text">Testimonials</h2>
      <div className="list-group">
        <div className="list-group-item d-flex align-items-center">
          <img src={img2}alt="Client 1" className="rounded-circle me-3" style={{width: '60px', height: '60px'}} />
          <div>
            <p className="mb-1">"Aswathy is a highly skilled developer and a pleasure to work with!"</p>
            <cite>- John Doe, Web Development Client</cite>
          </div>
        </div>
        <div className="list-group-item d-flex align-items-center">
          <img src={img2} alt="Client 2" className="rounded-circle me-3" style={{width: '60px', height: '60px'}} />
          <div>
            <p className="mb-1">"Her attention to detail is unmatched. Highly recommended!"</p>
            <cite>- Jane Smith, Project Manager</cite>
          </div>
        </div>
        <div className="list-group-item d-flex align-items-center">
          <img src={img2} alt="Art Director" className="rounded-circle me-3" style={{width: '60px', height: '60px'}} />
          <div>
            <p className="mb-1">"The photojournalism project was beautifully executed, showcasing a unique perspective!"</p>
            <cite>- B chandrakumar,course coordinator </cite>
          </div>
        </div>
        <div className="list-group-item d-flex align-items-center">
          <img src={img2} alt="Client 3" className="rounded-circle me-3" style={{width: '60px', height: '60px'}} />
          <div>
            <p className="mb-1">"Exceptional service and professionalism. Made the process seamless!"</p>
            <cite>- Sarah Johnson, e-Service Client</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
