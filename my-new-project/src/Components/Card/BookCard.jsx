import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col } from "react-bootstrap";
import { useState } from "react";
import RatingsArea from "../RatingsArea/RatingsArea";
import CommentModal from "../CommentModal/CommentModal";

const BookCard = ({ asin , img, title, category}) => {
  const [isCardSelected, setIfCardIsSelected] = useState(false);
  const toggleCardSelection = () => {
    setIfCardIsSelected(!isCardSelected);
  };
  


  const toggleSelectedCardClass = isCardSelected ? "cardBorder" : "";

  const [showRatingsArea, setShowRatingsArea] = useState(false);

  const toggleShowRatingsArea = () => setShowRatingsArea(!showRatingsArea);

  const [isCommentVisible, setIsCommentVisible] = useState(false);

  const showComments = () => {
    setIsCommentVisible(!isCommentVisible);
  };



  return (
    <>
      <Col sm={12} md={4} lg={3} className="mb-5">
        <Card
          className={`cards h-100 mt-5 ${toggleSelectedCardClass}`}
          onClick={toggleCardSelection}
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
              className="card-btn"
              variant="primary"
              onClick={showComments}
            >
              Show Comments
            </Button>
            <Button
              className="rounded-pill mt-2"
              variant="info"
              onClick={toggleShowRatingsArea}
            >
              {" "}
              Aggiungi commento
            </Button>
            {showRatingsArea && <RatingsArea
             asin={asin} 
             showRatingsArea={showRatingsArea}
             setShowRatingsArea={setShowRatingsArea} />}
          </Card.Body>
        </Card>
      </Col>
      {isCommentVisible && (
        <CommentModal
          isCommentVisible={isCommentVisible}
          setIsCommentVisible={setIsCommentVisible}
          asin={asin}
        />

      )}




    </>
  );
};

export default BookCard;
