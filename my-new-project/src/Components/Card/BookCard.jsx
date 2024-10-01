import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Button } from "react-bootstrap";
import RatingsArea from "../RatingsArea/RatingsArea";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookCard = ({
  asin,
  img,
  title,
  category,
  onCardClick,
  isSelected,
}) => {
  
  const navigate = useNavigate()

  const handleRedirectingToDetailsPage = () => {
    navigate(`/book/${asin}`)
  }


  const [showRatingsArea, setShowRatingsArea] = useState(false);

  const toggleSelectedCardClass = isSelected ? "cardBorder" : ""; // Classe per la card selezionata

  const toggleShowRatingsArea = () => setShowRatingsArea(!showRatingsArea);

  return (
    <Col sm={6} md={6} lg={6} className="mb-5">
      <Card
        className={`cards h-100 mt-5 ${toggleSelectedCardClass}`}
        onClick={() => onCardClick(asin)} // Gestisci la selezione della card
      >
        <Card.Img
          className="object-fit-contain w-100 h-100"
          variant="top"
          src={img}
        />
        <Card.Body className="cardIn d-flex flex-column align-items-center justify-content-center">
          <div className="cardTitle text-truncate">{title}</div>
          <Card.Text className="card-category mt-2">
            {category.toUpperCase()}
          </Card.Text>

          <Button
            className="rounded-pill mt-2"
            variant="info"
            onClick={toggleShowRatingsArea}
          >
            Aggiungi commento
          </Button>
          <Button
            className="rounded-pill mt-2"
            variant="success"
            onClick={handleRedirectingToDetailsPage}
          >
            Mostra Dettagli
          </Button>
          
          

          
          {showRatingsArea && (
            <RatingsArea
              asin={asin}
              showRatingsArea={showRatingsArea}
              setShowRatingsArea={setShowRatingsArea}
            />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
