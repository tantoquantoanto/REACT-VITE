import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Button } from "react-bootstrap";
import RatingsArea from "../RatingsArea/RatingsArea";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LightModeContext } from "../../utilities/LighMode";

const BookCard = ({
  asin,
  img,
  title,
  category,
  onCardClick,
  isSelected,
}) => {

   const {isLightMode} = useContext(LightModeContext);
  const toggleCardLightMode = isLightMode? "lightCards" : "cards";
  
  const navigate = useNavigate()

  const handleRedirectingToDetailsPage = () => {
    navigate(`/book/${asin}`)
  }


  const [showRatingsArea, setShowRatingsArea] = useState(false);

  const toggleSelectedCardClass = isSelected ? "cardBorder" : ""; 

  const toggleShowRatingsArea = (e) => { 
    e.stopPropagation();
    setShowRatingsArea(!showRatingsArea)};

  return (
    <Col sm={6} md={6} lg={6} className="mb-5">
      <Card
        className={`${toggleCardLightMode} h-100 mt-5 ${toggleSelectedCardClass}`}
        onClick={() => onCardClick(asin)} 
      >
        
        <Card.Img
          className="object-fit-contain w-100 h-100"
          variant="top"
          src={img}
        />
        <Card.Body className="cardIn d-flex flex-column align-items-center justify-content-center">
          <h3 className="cardTitle text-truncate">{title}</h3>
          <Card.Text className="card-category mt-2">
            {category.toUpperCase()}
          </Card.Text>

          <Button
            className="btn rounded-pill mt-2"
            onClick={toggleShowRatingsArea}
          >
            Aggiungi commento
          </Button>
          <Button
            className="btn rounded-pill mt-2"
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
