import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navcomponent from "./Components/Navcomponent";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import { Container, Row } from "react-bootstrap";
import Footer from "./Components/Footer/Footer";




const App = () => {
 


  return (
    <>
   <Navcomponent/>
  
   <Hero/>

   <Main/>

   <Footer/>
   

   </>
  )
}

export default App
