import { useEffect, useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import ModifyComments from "../ModifyComments/ModifyComments";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const CommentModal = ({ isCommentVisible, setIsCommentVisible, asin }) => {
  const [isChangeVisible, setIsChangeVisible] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [ratingId, setRatingId] = useState(null);
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const [isCommentError, setIsCommentError] = useState(false);

  const handleUpdateComment = (comment) => {
    setRatings((prevRatings) =>
      prevRatings.map((rating) =>
        rating._id === comment._id ? comment : rating
      )
    );
  };

  const removeComment = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmYxNjc1OTY1MWJkYTAwMTUzNzQzMDIiLCJpYXQiOjE3MjcwOTY2NjUsImV4cCI6MTcyODMwNjI2NX0.UXtXfqdjoHy6oI3BoRTVjvqRzPDseGvCFoO5nIAzIRo",
            "Content-Type": "application/json",
          },
        }
      );

      // Assicurati che la risposta sia OK
      if (response.ok) {
        // Aggiorna lo stato dei ratings per rimuovere il commento cancellato
        setRatings((prevRatings) =>
          prevRatings.filter((rating) => rating._id !== id)
        );
      } else {
        console.error("Failed to delete comment", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
      setIsCommentError(true);
    }
  };

  const showChangeForm = (rating) => {
    setRatingId(rating._id);
    setIsChangeVisible(true);
    // Imposta i dati del commento per la modifica
    setFormState({
      comment: rating.comment,
      rate: rating.rate,
    });
  };

  const getEndPoint = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`;

  const closeModal = () => {
    setIsCommentVisible(null);
  };

  const getRatingsFromApi = async () => {
    try {
      setIsCommentLoading(true);
      const response = await fetch(getEndPoint, {
        headers: {
          Authorization: "Bearer YOUR_TOKEN",
        },
      });
      const data = await response.json();
      setRatings(data);
    } catch (error) {
      console.log(error);
      setIsCommentError(true);
    } finally {
      setIsCommentLoading(false);
    }
  };

  useEffect(() => {
    getRatingsFromApi();
  }, [asin]);

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center">
        <h3>Comments</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        {isCommentLoading && <LoadingSpinner />}
        {!isCommentLoading && isCommentError && (
          <Alert variant="danger">Oops, qualcosa è andato storto...</Alert>
        )}
        {!isCommentLoading && !isCommentError && ratings.length > 0 && (
          <div>
            {ratings.map((rating) => (
              <div
                className="d-flex flex-column align-items-start justify-content-center"
                key={rating._id}
              >
                <div>
                  <strong>{rating.author}</strong>: {rating.comment}, Rate:{" "}
                  {rating.rate}
                </div>
                <div className="d-flex gap-2 align-items-center justify-content-center">
                  <Button
                    variant="warning"
                    onClick={() => showChangeForm(rating)}
                  >
                    Modifica
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setRatingId(rating._id); // Imposta l'ID del commento da rimuovere
                      removeComment(rating._id); // Chiama la funzione di rimozione
                    }}
                  >
                    Rimuovi commento
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ModifyComments
        isChangeVisible={isChangeVisible}
        setIsChangeVisible={setIsChangeVisible}
        id={ratingId}
        handleUpdateComment={handleUpdateComment}
        ratings={ratings}
      />
      <div>
        <Button variant="danger" onClick={closeModal}>
          Close
        </Button>
      </div>
    </Container>
  );
};

export default CommentModal;
