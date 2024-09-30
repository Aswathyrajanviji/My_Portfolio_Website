import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Project.css'; 
import kow from '../images/kowdiar.jpg';
import kuthira from'../images/kuthiramalika.jpg';
import kri from '../images/krishnapuram.jpg';



const Project = () => {
  return (
    <div>

    <section className="project container text-center bg-light p-5 rounded shadow">
    <h2 className="mb-4 text-font-weight-bold">Project in Photojournalism</h2>
    <div className="project-intro mb-4">
      <h5 className="font-weight-bold">Project Name: <span id="history">History Behind Palaces</span></h5>
      <p className="lead text-muted">
        A comprehensive exploration of the rich history and architectural beauty of various palaces.
      </p>
    </div>
  

  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
        <img src={kow} className="card-img-top" alt="Palace 1" />
        <div className="card-body">
          <h5 className="card-title">Kowdiar Palace</h5>
          <p className="card-text">This palace is known for its traditional Kerala architecture and royal heritage.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={kuthira} className="card-img-top" alt="Palace 2" />
        <div className="card-body">
          <h5 className="card-title">Kuthira Malika</h5>
          <p className="card-text">A short description of the palace and its historical significance.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={kri} className="card-img-top" alt="Palace 3" />
        <div className="card-body">
          <h5 className="card-title">Krishnapuram Palace</h5>
          <p className="card-text">A detailed exploration of this palace, highlighting its beautiful architecture and history.</p>
        </div>
      </div>
    </div>
  </div>
  </section>
  </div>
  );
};

export default Project;
