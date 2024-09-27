import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navcomponent from "./Components/Navcomponent";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import { Container, Row } from "react-bootstrap";
import Footer from "./Components/Footer/Footer";
import MyForm from "./Components/form/MyForm";
import { SearchContext, SearchProvider } from "./Components/ResearchTools/ResearchTools";

const App = () => {
  

  return (
    <>
    <SearchProvider>
      <Navcomponent
      />
      <Hero />
      <Main
    
      
      />
      <Footer />
      </SearchProvider>
    </>
  );
};

export default App;
