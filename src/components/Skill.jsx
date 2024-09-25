import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Skill.css';
const Skills = () => {
  const skills = [
    'React.js',
    'HTML/CSS',
    'JavaScript',
    'C',
    'C++',
    'SQL',
    'PHP',
    'Python'
  ];

  return (
    <div className="skills container text-center bg-light p-5">
      <h2 className="mb-4 text-primary">Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="skill-card p-4 border rounded">
              <h5>{skill}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
