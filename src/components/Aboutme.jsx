import React from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
import './Aboutme.css'; 

const AboutMe = () => {
  return (
    <div className="aboutme container text-center bg-light p-5">
      <h2 className="mb-4-text-primary">About Me</h2>
      <section id="aboutme">
        <p className="lead-text-muted">
          I am Aswathy R V, a passionate Frontend Developer with a strong foundation in web technologies.
        </p>
        <p className="text1">
          I graduated with a Bachelor's Degree in Computer Science in 2022, where I developed a solid understanding of programming and software development principles.
        </p>
        <p className="text2">
          Additionally, I completed a diploma in Photojournalism, enhancing my skills in storytelling through visuals and an understanding of design principles.
        </p>
        <p className="text3">
          I am currently specializing in Python Full Stack development, focusing on building efficient and scalable web applications. My goal is to create user-friendly interfaces that provide seamless experiences.
        </p>
        <h3 className="text-secondary">Professional Skills:</h3>
        <ul className="list-unstyled">
          <li cl>Frontend Development: React.js, HTML, CSS, JavaScript</li>
          <li>Photo Editing and Visual Storytelling</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
