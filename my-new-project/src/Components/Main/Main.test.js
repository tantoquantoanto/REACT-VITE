import "@testing-library/jest-dom";
import { getAllByTestId, render, screen, waitFor } from "@testing-library/react";
import Main from "./Main";
import { SearchContext } from "../ResearchTools/ResearchTools";
import { MemoryRouter } from "react-router-dom";
import { LightModeProvider } from "../../utilities/LighMode";

const mockBooks = [
  { asin: "123", title: "Book 1", category: "Category 1", img: "book1.jpg" },
  { asin: "456", title: "Book 2", category: "Category 2", img: "book2.jpg" },
  { asin: "789", title: "Book 3", category: "Category 3", img: "book3.jpg" },
  { asin: "101", title: "Book 4", category: "Category 4", img: "book4.jpg" },
  { asin: "201", title: "Book 5", category: "Category 5", img: "book5.jpg" },
  { asin: "301", title: "Book 6", category: "Category 6", img: "book6.jpg" },
];

const renderWithContext = (contextValue) => {
  return render(
    <MemoryRouter>
      <SearchContext.Provider value={contextValue}>
        <LightModeProvider>
          <Main />
        </LightModeProvider>
      </SearchContext.Provider>
    </MemoryRouter>
  );
};

describe("Main Component", () => {
  it("should display loading spinner when books are loading", () => {
    renderWithContext({
      books: [],
      isBookLoading: true,
      isBookError: "",
    });

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("should display an error message when there is an error", () => {
    renderWithContext({
      books: [],
      isBookLoading: false,
      isBookError: "Error fetching books",
    });

    expect(
      screen.getByText("Oops, qualcosa è andato storto...")
    ).toBeInTheDocument();
  });

  it("should display book cards when books are loaded and they should be as many as long the mock array", () => {
    renderWithContext({
      books: mockBooks,
      isBookLoading: false,
      isBookError: "",
    });

    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.getByText("Book 2")).toBeInTheDocument();
    
    const bookCards = screen.getAllByTestId("cardTest");
    expect(bookCards.length).toBe(6)

  });
});
