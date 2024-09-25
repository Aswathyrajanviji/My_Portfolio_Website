 import logo from './logo.svg';
import React from 'react';
  import './App.css';
 import Navbar from './components/Navbar';
 import Home from './components/Home';
import Aboutme from './components/Aboutme';
 import Education from './components/Education';
import Skill from './components/Skill';
  import Testmonial from './components/Testmonial';
 import Experience from './components/Experience';
  import Project from './components/Project';
import Contactme from './components/Contactme';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <div className="App">
  <Navbar/> 

   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='*' element={<Home/>}/>
     <Route path='aboutme' element={<Aboutme/>}/>
     <Route path='education' element={<Education/>}/>
    <Route path='skill' element={<Skill/>}/>
     <Route path='project' element={<Project/>}/>
      <Route path='experience' element={<Experience/>}/>
      <Route path='testmonial' element={<Testmonial/>}/>
      <Route path='contactme' element={<Contactme/>}/>
   </Routes>
    
     </div>
   );
 }

 export default App;


 