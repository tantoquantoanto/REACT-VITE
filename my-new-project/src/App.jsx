import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChiSiamo from "./Pages/ChiSiamo";
import BookDetails from "./Pages/BookDetails";
import NotFoundPage from "./Pages/NotFoundPage";
import Contatti from "./Pages/Contatti";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import { LightModeProvider } from "./utilities/LighMode";

const App = () => {
  return (
    <>
    <LightModeProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element = {<Contatti/>}/>
          <Route path="/privacy-policy" element = {<PrivacyPolicy/>}/>
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
      </LightModeProvider>
    </>
  );
};

export default App;
