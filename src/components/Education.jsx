import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Education.css'; // Import the CSS file for additional styles

const Education = () => {
  return (
    <section className="education container text-center bg-light p-5">
      <h2 className="mb-4-text-primary">Education</h2>
      <div className="mb-4 education-item">
        <h5 className="font-weight-bold year">2017</h5>
        <p className="description">Completed SSLC with 90% marks.</p>
      </div>
      <div className="mb-4 education-item">
        <h5 className="font-weight-bold year">2019</h5>
        <p className="description">Completed Plus Two in Computer Science with 70% marks.</p>
      </div>
      <div className="mb-4 education-item">
        <h5 className="font-weight-bold year">2022</h5>
        <p className="description">Graduated with a Bachelor's Degree in Computer Science, scoring 75% marks.</p>
      </div>
      <div className="mb-4 education-item">
        <h5 className="font-weight-bold year">2024</h5>
        <p className="description">Diploma in Photojournalism.</p>
      </div>
    </section>
  );
};

export default Education;

