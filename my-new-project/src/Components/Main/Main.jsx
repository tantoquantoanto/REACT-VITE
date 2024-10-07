import "./main.css";
import { Alert, Col, Container, Row } from "react-bootstrap";
import BookCard from "../Card/BookCard";
import { useContext, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { SearchContext } from "../ResearchTools/ResearchTools";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const {
    books,
    isBookLoading: isLoading,
    isBookError: isError,
  } = useContext(SearchContext);

  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleBookSelection = (asin) => {
    setSelectedBookId(selectedBookId === asin ? null : asin);
  };

  return (
    <Container className="mainContainer">
      <Row>
        <Col sm={12} className="p-0">
          <Row>
            <h3 className="mt-2 mb-2 align-self-start">Books</h3>

            {isLoading && !isError && (
              <LoadingSpinner data-testid="loading-spinner" />
            )}

            {!isLoading && isError !== "" && (
              <Alert variant="danger">Oops, qualcosa è andato storto...</Alert>
            )}

            {!isLoading &&
              !isError &&
              books.map((book) => (
                <BookCard
                  key={uuidv4()}
                  asin={book.asin}
                  title={book.title}
                  category={book.category}
                  img={book.img}
                  isSelected={selectedBookId === book.asin}
                  onCardClick={handleBookSelection}
                  data-testid="cardTest"
                />
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
