import React from "react"; 
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume"

function Main (){
    return (
    <BrowserRouter basename="react-portfolio"> 
    <Header/>
    <Routes> 
    <Route path="/" element={<About/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/resume" element={<Resume/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    )
}


export default Main;
