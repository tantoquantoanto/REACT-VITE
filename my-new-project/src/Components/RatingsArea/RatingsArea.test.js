import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { SearchProvider } from "../ResearchTools/ResearchTools";
import { LightModeProvider } from "../../utilities/LighMode";
import RatingsArea from "./RatingsArea"; // Assicurati che il percorso sia corretto
import { MemoryRouter } from "react-router-dom";

describe("Test RatingsArea Component", () => { // Rimosso async
  it("should render two inputs", () => {
    const { getByPlaceholderText } = render(
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
    );

    const inputCommentElement = getByPlaceholderText("Scrivi un commento");
    const inputRateElement = getByPlaceholderText("Dai un voto da 1 a 5");

    expect(inputCommentElement).toBeInTheDocument();
    expect(inputRateElement).toBeInTheDocument();
  });

  it("should change its value on change", () => {
    const { getByPlaceholderText } = render(
      <SearchProvider>
        <LightModeProvider>
          <RatingsArea
            asin={123}
            showRatingsArea={true}
            setShowRatingsArea={jest.fn()}
          />
        </LightModeProvider>
      </SearchProvider>
    );

    const inputCommentElement = getByPlaceholderText("Scrivi un commento");

    fireEvent.change(inputCommentElement, {
      target: {
        value: "Ciao a tutti",
      },
    });

    expect(inputCommentElement).toHaveValue("Ciao a tutti"); // Corretto inputElement a inputCommentElement
  });
});
