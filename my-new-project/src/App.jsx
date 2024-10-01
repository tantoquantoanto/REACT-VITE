import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChiSiamo from "./Pages/ChiSiamo";
import BookDetails from "./Pages/BookDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
