import Button from "../Button/Button";
import "./hero.css";
import Fantasy from "../Hero/mainAssets/fantasy.json";
import History from "../Hero/mainAssets/history.json";
import Horror from "../Hero/mainAssets/horror.json";
import Romance from "../Hero/mainAssets/romance.json";
import Scifi from "../Hero/mainAssets/scifi.json";
import { Col, Container, Row } from "react-bootstrap";

const Hero = ({ title, message, img, btnText }) => {
  const books = [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi];
  const randomIndex = Math.floor(Math.random() * books.length);
  const randomBook = books[randomIndex];
  console.log(randomBook);

  return (
    <section className="hero d-flex align-items-center">
      <Container>
        <Row className="p-5 d-flex align-items-center justify-content-center">
          <Col className="heroCol d-flex p-0">
            <div className="heroLeft">
              <img src={randomBook.img} alt="" />
            </div>
            <div className="heroRight d-flex flex-column text-align-center p-4">
              <h3 className="mt-3 display-5 ">BEST SELLER OF THE DAY</h3>
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
