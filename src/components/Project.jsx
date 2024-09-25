import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Project.css'; // Import a CSS file for additional styles

const Project = () => {
  return (
    <section className="project container text-center bg-light p-5 rounded shadow">
      <h2 className="mb-4 text-primary font-weight-bold">Project in Photojournalism</h2>
      <div className="project-intro mb-4">
        <h5 className="font-weight-bold">Project Name: <span className="text-success">History Behind Palaces</span></h5>
        <p className="lead text-muted">
          A comprehensive exploration of the rich history and architectural beauty of various palaces.
        </p>
      </div>
      
      <div className="project-details mb-4 text-left">
        <h6 className="font-weight-bold">Kowdiar Palace</h6>
        <p>A magnificent royal residence known for its stunning architecture and historical significance.</p>
        
        <h6 className="font-weight-bold">Kuthira Malika</h6>
        <p>An exquisite palace famous for its unique horse-shaped architecture and intricate woodwork.</p>
        
        <h6 className="font-weight-bold">Krishnapuram Palace</h6>
        <p>Renowned for its beautiful murals and extensive gardens, showcasing traditional Kerala architecture.</p>
      </div>
      
      <div className="project-summary mt-4">
        <p className="text-dark">
          This project involved extensive research, photography, and visual storytelling, highlighting the cultural significance of these historical sites. I utilized photography to capture the intricate details and grandeur of each palace, along with written narratives that provide context and background.
        </p>
      </div>
      
      <h6 className="font-weight-bold mt-4">Key Features:</h6>
      <ul className="list-unstyled text-left">
        <li>In-depth research on historical significance</li>
        <li>High-quality photographic documentation</li>
        <li>Engaging narratives that bring history to life</li>
      </ul>
    </section>
  );
};

export default Project;
