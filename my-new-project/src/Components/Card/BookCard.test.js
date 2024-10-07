import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import BookCard from "./BookCard";
import { SearchProvider } from "../ResearchTools/ResearchTools";
import { LightModeProvider } from "../../utilities/LighMode";
import { MemoryRouter } from "react-router-dom";
import RatingsArea from "../RatingsArea/RatingsArea";

describe("Test BookCard Component", () => {
  it("should render the book with all the details", () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <SearchProvider>
          <LightModeProvider>
            <BookCard
              asin={"12345"}
              img={"https://example.com/book.jpg"}
              title={"Il Signore degli Anelli"}
              category={"fantasy"}
              onCardClick={jest.fn()}
              isSelected={false}
            />
          </LightModeProvider>
        </SearchProvider>
      </MemoryRouter>
    );

    const imgElement = getByAltText("image of Il Signore degli Anelli");
    expect(imgElement).toBeInTheDocument();

    const titleElement = getByText("Il Signore degli Anelli");
    expect(titleElement).toBeInTheDocument();

    const category = getByText("FANTASY");
    expect(category).toBeInTheDocument();
  });
  it(" should apply the correct class based on light mode", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SearchProvider>
          <LightModeProvider value={{ isLightMode: true }}>
            <BookCard
              asin={"12345"}
              img={"https://example.com/book.jpg"}
              title={"Il Signore degli Anelli"}
              category={"fantasy"}
              onCardClick={jest.fn()}
              isSelected={false}
            />
          </LightModeProvider>
        </SearchProvider>
      </MemoryRouter>
    );

    const cardElement = getByTestId("cardTest");
    expect(cardElement).toHaveClass("cards");
  });

  it(" should toggle light and dark mode when the card is clicked", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SearchProvider>
          <LightModeProvider value={{ isLightMode: true }}>
            <BookCard
              asin={"12345"}
              img={"https://example.com/book.jpg"}
              title={"Il Signore degli Anelli"}
              category={"fantasy"}
              onCardClick={jest.fn()}
              isSelected={false}
            />
          </LightModeProvider>
        </SearchProvider>
      </MemoryRouter>
    );

    const cardElement = getByTestId("cardTest");
    fireEvent.click(cardElement);
    expect(cardElement).toHaveClass("cards");
  });

  it("should apply 'cardBorder' class when the card is selected", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SearchProvider>
          <LightModeProvider>
            <BookCard
              asin={"12345"}
              img={"https://example.com/book.jpg"}
              title={"Il Signore degli Anelli"}
              category={"fantasy"}
              onCardClick={jest.fn()}
              isSelected={true} 
            />
          </LightModeProvider>
        </SearchProvider>
      </MemoryRouter>
    );

    const cardElement = getByTestId("cardTest");
    expect(cardElement).toHaveClass("cardBorder"); 
  });

  it("should not have 'cardBorder' class when the card is not selected", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SearchProvider>
          <LightModeProvider>
            <BookCard
              asin={"12345"}
              img={"https://example.com/book.jpg"}
              title={"Il Signore degli Anelli"}
              category={"fantasy"}
              onCardClick={jest.fn()}
              isSelected={false} 
            />
          </LightModeProvider>
        </SearchProvider>
      </MemoryRouter>
    );

    const cardElement = getByTestId("cardTest");
    expect(cardElement).not.toHaveClass("cardBorder"); 
  });


});
