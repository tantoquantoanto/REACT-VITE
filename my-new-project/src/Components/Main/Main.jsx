import "./main.css";
import { Alert, Col, Container, Row } from "react-bootstrap";
import BookCard from "../Card/BookCard";
import { useContext, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { SearchContext } from "../ResearchTools/ResearchTools";
import CommentModal from "../CommentModal/CommentModal";

const Main = () => {
  const {
    books,
    isBookLoading: isLoading,
    isBookError: isError,
  } = useContext(SearchContext);

  
  const [selectedBookId, setSelectedBookId] = useState(null);

  // Funzione per selezionare o deselezionare un libro
  const handleBookSelection = (asin) => {
    setSelectedBookId(selectedBookId === asin ? null : asin); // Se il libro è già selezionato, deselezionalo
  };

  return (
    <Container className="mainContainer">
      <Row>
        <Col sm={12} className="p-0">
          <Row>
            <Col sm={6}>
              <Row>
                <h3 className="mt-2 mb-2 align-self-start">Books</h3>

                {/* Loading Spinner durante il caricamento */}
                {isLoading && !isError && <LoadingSpinner />}

                {/* Gestione degli errori */}
                {!isLoading && isError !== "" && (
                  <Alert variant="danger">
                    Oops, qualcosa è andato storto...
                  </Alert>
                )}

                {/* Mostra le card solo quando non stiamo caricando e non ci sono errori */}
                {!isLoading &&
                  !isError &&
                  books.map((book) => (
                    <BookCard
                      key={book.asin}
                      asin={book.asin}
                      title={book.title}
                      category={book.category}
                      img={book.img}
                      isSelected={selectedBookId === book.asin} // Passa se la card è selezionata
                      onCardClick={handleBookSelection} // Funzione per gestire la selezione
                    />
                  ))}
              </Row>
            </Col>

            {/* Mostra il CommentModal solo se un libro è selezionato */}
            <Col sm={6}>
              {selectedBookId && (
                <CommentModal
                  isCommentVisible={!!selectedBookId}
                  setIsCommentVisible={setSelectedBookId}
                  asin={selectedBookId} // Passa l'ASIN del libro selezionato
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
