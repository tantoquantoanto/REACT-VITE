/*
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchProvider } from "../ResearchTools/ResearchTools";
import Main from "./Main";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


// Mock dei dati dei libri
const mockBooks = [
  { asin: "1", title: "Book One", category: "Fiction", img: "book1.jpg" },
  { asin: "2", title: "Book Two", category: "Non-Fiction", img: "book2.jpg" },
];

describe("Main component", () => {
  it("renders loading spinner when loading", () => {
    const { getByTestId } = render(
      <SearchProvider value={{ books: [], isBookLoading: true, isBookError: "" }}>
        <Main />
      </SearchProvider>
    );

    // Verifica che il LoadingSpinner sia presente
    expect(getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders an error message when there is an error", () => {
    const { getByText } = render(
      <SearchProvider value={{ books: [], isBookLoading: false, isBookError: "Error" }}>
        <Main />
      </SearchProvider>
    );

    // Verifica che il messaggio di errore sia presente
    expect(getByText("Oops, qualcosa è andato storto...")).toBeInTheDocument();
  });

  it("renders books when there are no loading or error states", () => {
    const { getByText } = render(
      <SearchProvider value={{ books: mockBooks, isBookLoading: false, isBookError: "" }}>
        <Main />
      </SearchProvider>
    );

    // Verifica che i titoli dei libri siano presenti
    expect(getByText("Book One")).toBeInTheDocument();
    expect(getByText("Book Two")).toBeInTheDocument();
  });

  it("renders the correct number of BookCard components", () => {
    const { container } = render(
      <SearchProvider value={{ books: mockBooks, isBookLoading: false, isBookError: "" }}>
        <Main />
      </SearchProvider>
    );

    // Verifica che il numero di BookCard sia corretto
    const bookCards = container.getElementsByClassName("cardTest"); // Assicurati di avere una classe specifica nel tuo BookCard
    expect(bookCards.length).toBe(mockBooks.length);
  });
});
*/