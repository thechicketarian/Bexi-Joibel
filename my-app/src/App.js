import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import About from "./pages/About/index";
// import Contact from "./pages/Contact/index";
// import Design from "./pages/Design/index";
// import Development from "./pages/Development/index";
import Resume from "./pages/Resume/index"
import Home from "./pages/Home/index";
// import Bootcampers from './pages/Development/bootcampers';

//pages

//css
import './App.css';
import './index.css';

function App() {

  return (
    <BrowserRouter> 
    <Header/>
    <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    {/* <Route path="/design" element={<Design/>}/> */}
    {/* <Route path="/dev" element={<Development/>}>
      <Route path="bootcampers" element={<Bootcampers/>}/>
    </Route> */}
    {/* <Route path="bootcampers" element={<Bootcampers/>}/> */}
    {/* <Route path="/contact" element={<Contact/>}/> */}
    <Route path="/resume" element={<Resume/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App;
