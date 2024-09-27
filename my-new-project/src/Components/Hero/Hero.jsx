import { useContext } from "react";
import "./hero.css";

import { Col, Container, Row, Button } from "react-bootstrap";
import { SearchContext } from "../ResearchTools/ResearchTools";

const Hero = () => {
  const { allBooks } = useContext(SearchContext);

  if (allBooks.length === 0) {
    return null; // o un loader, messaggio di caricamento, ecc.
  }

  const randomIndex = Math.floor(Math.random() * allBooks.length);
  const randomBook = allBooks[randomIndex];

  return (
    <section className="hero d-flex align-items-center justify-content-center">
      <Container>
        <Row className="p-0 p-md-5 d-flex align-items-center justify-content-center">
          <Col className="heroCol d-flex p-0 flex-column flex-md-row">
            <div className="heroLeft w-100 w-md-50">
              <img
                className="img-fluid object-fit-contain"
                src={randomBook.img}
                alt=""
              />
            </div>
            <div className="heroRight w-100 w-md-50 d-flex flex-column align-items-center justify-content-center p-4">
              <h3 className="mt-3">BEST SELLER</h3>
              <h1 className="mt-5">{randomBook.title}</h1>
              <p className="lead d-flex align-self-center mt-5">
                {randomBook.category.toUpperCase()}
              </p>
              <hr className="my-4" />
              <button className="btn mt-5">
                {`Acquistalo a ${randomBook.price} €`}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
