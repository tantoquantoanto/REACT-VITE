import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { SearchProvider } from "../ResearchTools/ResearchTools";
import { LightModeProvider } from "../../utilities/LighMode";
import RatingsArea from "./RatingsArea";
import { MemoryRouter } from "react-router-dom";


describe("Test RatingsArea Component", () => {
it("should render two inputs and two buttons", () => {
    const {  getByPlaceholderText } = render(
        <MemoryRouter>
        <SearchProvider>
            <LightModeProvider>
                <RatingsArea
                asin={123}
                showRatingsArea={true}
                setShowRatingsArea={jest.fn()}
                />
            </LightModeProvider>
        </SearchProvider>
        </MemoryRouter>
    )

    const inputCommentElement = getByPlaceholderText("Scrivi un commento");
    const inputRateElement = getByPlaceholderText("Dai un voto da 1 a 5");

   expect(inputCommentElement).toBeInTheDocument()
   expect(inputRateElement).toBeInTheDocument()


}) 
it("should change its value on change", () => {
    const {  getByPlaceholderText } = render(
      <SearchProvider>
        <LightModeProvider>
          <NavInput />
        </LightModeProvider>
      </SearchProvider>
    );
    const inputCommentElement = getByPlaceholderText("Scrivi un commento");
    fireEvent.change(inputCommentElement, {
      target: {
        value: "Ciao a tutti",
      },
    });

    expect(inputElement).toHaveValue("Ciao a tutti");
  });

})