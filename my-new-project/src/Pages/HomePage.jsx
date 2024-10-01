import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchProvider } from "../Components/ResearchTools/ResearchTools";
import Navcomponent from "../Components/Navcomponent";
import Hero from "../Components/Hero/Hero";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";


const HomePage = () => {
    return (
        <>
    <SearchProvider>
      <Navcomponent
      />
      <Hero />
      <Main
    
      
      />
      <Footer/>
      </SearchProvider>
    </>

    )
}

export default HomePage