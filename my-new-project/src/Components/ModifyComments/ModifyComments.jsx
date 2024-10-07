import { useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ModifyComments = ({
  isChangeVisible,
  setIsChangeVisible,
  id,
  handleUpdateComment,
}) => {
  const closeModal = () => {
    setIsChangeVisible(!isChangeVisible);
  };

  const [isChangeLoading, setIsChangeLoading] = useState(false);
  const [isChangeError, setIsChangeError] = useState(false);
  const [formState, setFormState] = useState({
    elementId: id,
    comment: "",
    rate: 1,
  });

  const handleFormChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const putEndpoint = `https://striveschool-api.herokuapp.com/api/comments/${id}`;

  const changeOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsChangeLoading(true);
      const response = await fetch(putEndpoint, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmYxNjc1OTY1MWJkYTAwMTUzNzQzMDIiLCJpYXQiOjE3MjcwOTY2NjUsImV4cCI6MTcyODMwNjI2NX0.UXtXfqdjoHy6oI3BoRTVjvqRzPDseGvCFoO5nIAzIRo",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      setIsChangeLoading(false);

      const updatedComment = await response.json();
      handleUpdateComment(updatedComment);

      closeModal();
    } catch (error) {
      console.log("Error:", error);
      setIsChangeError(true);
    } finally {
      setIsChangeLoading(false);
    }
  };

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      elementId: id,
    }));
  }, [id]);

  return (
    <Modal show={isChangeVisible}>
      <Modal.Header>
        <Modal.Title>Modifica la tua recensione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isChangeLoading && !isChangeError && <LoadingSpinner />}
        {!isChangeLoading && isChangeError && (
          <Alert variant="danger">Oops, qualcosa è andato storto...</Alert>
        )}
        {!isChangeLoading && !isChangeError && (
          <Form onSubmit={changeOnSubmit}>
            <Form.Control
              onChange={handleFormChange}
              type="text"
              name="comment"
              required
              value={formState.comment}
              placeholder="Cambia il tuo commento"
            />
            <Form.Control
              onChange={handleFormChange}
              type="number"
              min={1}
              max={5}
              name="rate"
              required
              value={formState.rate}
              placeholder="Cambia il tuo rate"
            />
            <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
              <Button type="submit" variant="success">
                Salva Modifica
              </Button>
              <Button onClick={closeModal} variant="danger">
                Annulla Modifica
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModifyComments;
