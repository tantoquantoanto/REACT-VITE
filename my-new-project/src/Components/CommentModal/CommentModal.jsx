import { useEffect, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import ModifyComments from "../ModifyComments/ModifyComments";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const CommentModal = ({ isCommentVisible, setIsCommentVisible, asin }) => {
  const [isChangeVisible, setIsChangeVisible] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [ratingId, setRatingId] = useState(null);
  const [commentToDelete, setCommentToDelete] = useState("");
  const[isCommentLoading, setIsCommentLoading] = useState(false)
  const [isCommentError, setIsCommentError] = useState(false)

  const handleUpdateComment = (comment) => {
    setRatings((prevRatings) =>
      prevRatings.map((rating) => {
        if (rating._id === comment._id) {
          return comment;
        } else {
          return rating;
        }
      })
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
      const data = response.json();
      setRatings((prevRatings) =>
        prevRatings.filter((rating) => rating._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const showChangeForm = () => {
    setIsChangeVisible(!isChangeVisible);
  };

  const getEndPoint = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`;

  const closeModal = () => {
    setIsCommentVisible(!isCommentVisible);
  };

  const getRatingsFromApi = async () => {
    try {
        setIsCommentLoading(true)
      const response = await fetch(getEndPoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmYxNjc1OTY1MWJkYTAwMTUzNzQzMDIiLCJpYXQiOjE3MjcwOTY2NjUsImV4cCI6MTcyODMwNjI2NX0.UXtXfqdjoHy6oI3BoRTVjvqRzPDseGvCFoO5nIAzIRo",
        },
      });
      const data = await response.json();
      setIsCommentLoading(false)
      console.log(data);
      setRatings(data);
    } catch (error) {
      console.log(error);
      setIsCommentError(true)
    }
    finally{
        setIsCommentLoading(false)
    }
  };

  useEffect(() => {
    getRatingsFromApi();
  }, [asin]);

  return (
    <>
      <Modal show={isCommentVisible}>
        <Modal.Header>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {isCommentLoading && !isCommentError && (<LoadingSpinner/>)}
            {!isCommentLoading && isCommentError && (<Alert variant="danger">Oops, qualcosa è andato storto...</Alert>)}


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
                    onClick={() => {
                      setRatingId(rating._id);
                      showChangeForm();
                    }}
                  >
                    Modifica
                  </Button>
                  <Button
                  variant="danger"
                    onClick={() => {
                      setRatingId(rating._id); 
                      removeComment(rating._id); 
                    }}
                  >
                    Rimuovi commento
                  </Button>
                  </div>
                </div>
              ))}
            </div>
          )} {!isCommentLoading && !isCommentError && ratings.length === 0 && (
            <p>No comments available</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ModifyComments
        isChangeVisible={isChangeVisible}
        setIsChangeVisible={setIsChangeVisible}
        id={ratingId}
        ratings={ratings}
        setRatings={setRatings}
        handleUpdateComment={handleUpdateComment}
      />
    </>
  );
};

export default CommentModal;
