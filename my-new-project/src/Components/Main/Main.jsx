import "./main.css";
import { Container, Row } from "react-bootstrap";
import Fantasy from "../Hero/mainAssets/fantasy.json";
import Horror from "../Hero/mainAssets/horror.json";
import Romance from "../Hero/mainAssets/romance.json";
import BookCard from "../Card/BookCard";
import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";

const Main = () => {
    const FantasyArray = Fantasy.slice(0, 12);
    const HorrorArray = Horror.slice(0, 12);
    const RomanceArray = Romance.slice(0, 12);

  
    const mergedBooksArray = [
        ...FantasyArray,
        ...HorrorArray,
        ...RomanceArray,
    ];
    const randomizedBooksArray = [...mergedBooksArray].sort(() => Math.random() - 0.5);

    
    const [books, setBooks] = useState(randomizedBooksArray);
    const [allBooks] = useState(randomizedBooksArray);

    return (
        <Container className="mainContainer">
            <SearchForm
                books={books}
                setBooks={setBooks}
                allBooks={allBooks}
            />

            
            <Row className="d-flex justify-content-center">
                <h3 className="mt-2 mb-2 align-self-start">Books</h3>
                {books.length === 0 ? (
                    <p>No books found</p>
                ) : (
                    books.map((book, index) => (
                        <BookCard
                            key={index} 
                            title={book.title}
                            img={book.img}
                            category={book.category}
                            price={book.price}
                        />
                    ))
                )}
            </Row>
        </Container>
    );
};

export default Main;
