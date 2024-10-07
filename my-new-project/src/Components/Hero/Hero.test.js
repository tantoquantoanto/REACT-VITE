
import { getByAltText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchProvider } from "../ResearchTools/ResearchTools";
import { LightModeProvider } from "../../utilities/LighMode";
import Hero from "./Hero";
import { MemoryRouter } from "react-router-dom";



describe(" Test Hero component", () => {
   

      it(" should render Hero component when allBooks has data", () => {
    
        
        const {  getByText, getByAltText } = render(
            <MemoryRouter>
          <SearchProvider >
            <LightModeProvider>
              <Hero />
            </LightModeProvider>
          </SearchProvider>
          </MemoryRouter>
        );
      
        const heroTitleElement = getByText("BEST SELLER");
        const buyButtonElement = getByText(/Acquistalo a:/i);
        const imgElement = getByAltText("copertina libro");

        expect(heroTitleElement).toBeInTheDocument();
        expect(buyButtonElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
        
      
      });

      
      
     
      
});
