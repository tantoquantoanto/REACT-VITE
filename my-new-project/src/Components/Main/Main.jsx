import "./main.css";
import { Alert, Container, Row } from "react-bootstrap";
import BookCard from "../Card/BookCard";
import { useContext, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { SearchContext } from "../ResearchTools/ResearchTools";

const Main = () => {

  const {books, isBookLoading:isLoading, isBookError:isError, onChangeInput, showResults } = useContext(SearchContext)


  return (
    <Container className="mainContainer">


      <Row className="d-flex justify-content-center">
        
        <h3 className="mt-2 mb-2 align-self-start">Books</h3>
        {isLoading && !isError && <LoadingSpinner />}
        {!isLoading && isError !== "" && (
          <Alert variant="danger">Oops, qualcosa è andato storto...</Alert>
        )}

        {!isLoading &&
          !isError &&
          books.map((book) =>(
            <BookCard
              asin={book.asin}
              title={book.title}
              category={book.category}
              img={book.img}
            />
          ))}
      </Row>
    </Container>
  );
};

export default Main;
