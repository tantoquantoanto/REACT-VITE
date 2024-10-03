import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Alert, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import ModifyComments from "../Components/ModifyComments/ModifyComments";
import Navcomponent from "../Components/Navbar/Navcomponent";
import "./pagescss/bookDetails.css"
import { LightModeContext } from "../utilities/LighMode";



const BookDetails = () => {
  const [singleBook, setSingleBook] = useState({});
  const [singleBookComments, setSingleBookComments] = useState([]);
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const [isCommentError, setIsCommentError] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null); 
  const [editedComment, setEditedComment] = useState({ comment: "", rate: 1 }); 
  const [isEditing, setIsEditing] = useState(false); 
  const [isDeleting, setIsDeleting] = useState(false); 


  const {isLightMode} = useContext(LightModeContext)

  const toggleSingleBookClass = isLightMode ? "lightCard" : "singleBookCard";

  const { bookId } = useParams();
  const endPoint = `https://epibooks.onrender.com/${bookId}`;

  const getBookFromApi = async () => {
    try {
      const response = await fetch(endPoint);
      const data = await response.json();
      setSingleBook(data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const getCommentsForTheSingleBook = async () => {
    try {
      setIsCommentLoading(true);
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`);
      const comments = await response.json();
      setSingleBookComments(comments);
    } catch (e) {
      setIsCommentError(true);
    } finally {
      setIsCommentLoading(false);
    }
  };

  const removeComment = async (id) => {
    try {
      setIsDeleting(true);
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmYxNjc1OTY1MWJkYTAwMTUzNzQzMDIiLCJpYXQiOjE3MjcwOTY2NjUsImV4cCI6MTcyODMwNjI2NX0.UXtXfqdjoHy6oI3BoRTVjvqRzPDseGvCFoO5nIAzIRo",
        },
      });

      if (response.ok) {
        setSingleBookComments((prevComments) =>
          prevComments.filter((comment) => comment._id !== id)
        );
      } else {
        console.error(response.status);
      }
    } catch (error) {
      console.log( error);
      setIsCommentError(true);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditComment = (comment) => {
    setEditingCommentId(comment._id);
    setEditedComment({ comment: comment.comment, rate: comment.rate });
    setIsEditing(true);
  };

  const handleUpdateComment = async (updatedComment) => {
    try {
      setIsCommentLoading(true);
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${editingCommentId}`, {
        method: "PUT",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmYxNjc1OTY1MWJkYTAwMTUzNzQzMDIiLCJpYXQiOjE3MjcwOTY2NjUsImV4cCI6MTcyODMwNjI2NX0.UXtXfqdjoHy6oI3BoRTVjvqRzPDseGvCFoO5nIAzIRo",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedComment),
      });

      if (response.ok) {
        const updated = await response.json();
        setSingleBookComments((prevComments) =>
          prevComments.map((comment) =>
            comment._id === editingCommentId ? updated : comment
          )
        );
        setIsEditing(false); 
      } else {
        console.error("Failed to update comment", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
      setIsCommentError(true);
    } finally {
      setIsCommentLoading(false);
    }
  };

  useEffect(() => {
    getBookFromApi();
    getCommentsForTheSingleBook();
  }, [bookId]);

  return (
    <>
      <Navcomponent />
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="mb-4">
            <Card className={`${toggleSingleBookClass}`}>
              {singleBook.img && <Card.Img variant="top" src={singleBook.img} />}
              <Card.Body>
                <Card.Title className="singleBookTitle">{singleBook.title}</Card.Title>
                <Card.Text className="singleBookText">{singleBook.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6}>
            <Card className="singleBookComments">
              <Card.Body>
                <Card.Title className="commTitle">Comments</Card.Title>
                {isCommentLoading ? (
                  <LoadingSpinner />
                ) : isCommentError ? (
                  <Alert variant="danger">Oops, qualcosa è andato storto...</Alert>
                ) : singleBookComments.length > 0 ? (
                  singleBookComments.map((singleBookComment) => (
                    <ul className="list-unstyled" key={singleBookComment._id}>
                      <li><strong>Author:</strong> {singleBookComment.author}</li>
                      <li><strong>Comment:</strong> {singleBookComment.comment}</li>
                      <li><strong>Rate:</strong> {singleBookComment.rate}</li>
                      <div className=" d-flex align-items-center justify-content-center gap-2">
                        <Button
                          variant="info"
                          className="mt-2"
                          onClick={() => handleEditComment(singleBookComment)}
                        >
                          Modifica
                        </Button>
                        <Button
                          variant="danger"
                          className="mt-2"
                          onClick={() => removeComment(singleBookComment._id)}
                          disabled={isDeleting}
                        >
                          {isDeleting ? "Eliminando..." : "Rimuovi"}
                        </Button>
                      </div>
                      <hr />
                    </ul>
                  ))
                ) : (
                  <p>No comments available.</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
        {isEditing && (
          <ModifyComments
            isChangeVisible={isEditing}
            setIsChangeVisible={setIsEditing}
            id={editingCommentId}
            handleUpdateComment={handleUpdateComment}
          />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default BookDetails;
