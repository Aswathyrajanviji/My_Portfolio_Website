 import React from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
 import './Experience.css';

 const Experience = () => {
 return (
    <div className="experience container text-center">
       <h2 className="mb-4">Experience</h2>
      <p>
        I have been working at a private online service center near the MVD office in Attingal since 2020. Here are some of the key services I provide:
       </p>
      <div className="row">
        <div className="col-md-4">
         <div className="card mb-3">
            <div className="card-body">
               <h5 className="card-title">E-Payment Services</h5>
               <p className="card-text">Facilitating secure online payments for various services.</p>
             </div>
           </div>
        </div>
        <div className="col-md-4">
           <div className="card mb-3">
             <div className="card-body">
             <h5 className="card-title">E-Tax Services</h5>
               <p className="card-text">Assisting clients with electronic tax filing and inquiries.</p>
           </div>
           </div>
         </div>
         <div className="col-md-4">
         <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">RC-Related Services</h5>
              <p className="card-text">Providing services related to vehicle registration and RC renewals.</p>
             </div>
           </div>
        </div>
         <div className="col-md-4">
          <div className="card mb-3">
             <div className="card-body">
              <h5 className="card-title">License Applications</h5>
               <p className="card-text">Processing applications for driving licenses.</p>
             </div>
           </div>
       </div>
        <div className="col-md-4">
           <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Learner's License Applications</h5>
              <p className="card-text">Helping clients apply for learner's licenses.</p>
            </div>
           </div>
        </div>
         <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">License Renewals</h5>
               <p className="card-text">Assisting clients with the renewal of their driving licenses.</p>
            </div>
           </div>
         </div>
       </div>
    </div>
  );
 }

 export default Experience;

