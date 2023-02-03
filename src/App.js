
import "./index.css";
import React from 'react';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
import Project from "./routes/Project"
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/skills' element={<Skills/>}/> 
      <Route path='/projects' element={<Project/>}/> 

    </Routes>
    </>
  );
}

export default App;
