

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Testmonial.css';

const Testimonials = () => {
  return (
    <div className="testimonial container text-center bg-light p-5 rounded">
      <h2 className="mb-4 text">Testimonials</h2>
      <div className="list-group">
        <div className="list-group-item">
          <p className="mb-1">"Aswathy is a highly skilled developer and a pleasure to work with!"</p>
          <cite>- Client A</cite>
        </div>
        <div className="list-group-item">
          <p className="mb-1">"Her attention to detail is unmatched. Highly recommended!"</p>
          <cite>- Client B</cite>
        </div>
        <div className="list-group-item">
          <p className="mb-1">"The photojournalism project was beautifully executed, showcasing a unique perspective!"</p>
          <cite>- Art Director</cite>
        </div>
        <div className="list-group-item">
          <p className="mb-1">"Exceptional service and professionalism. Made the process seamless!"</p>
          <cite>- Client C</cite>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
