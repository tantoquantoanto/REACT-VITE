import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BookCard from "./BookCard";

describe("Test BookCard Component", () => {
  it("should render the book with all the details", () => {
    const { getByAltText } = render(
      <BookCard
        asin={"12345"}
        img={"https://example.com/book.jpg"}
        title={"Il Signore degli Anelli"}
        category={"fantasy"}
        onCardClick={jest.fn()}
        isSelected={false}
      />
    );

    const imgElement = getByAltText("image of Il Signore degli Anelli");
    expect(imgElement).toBeInTheDocument();
  });
});
