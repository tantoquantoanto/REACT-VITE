import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const postEndPoint = `https://striveschool-api.herokuapp.com/api/comments`;

const RatingsArea = ({ asin, showRatingsArea, setShowRatingsArea }) => {
  const [formState, setFormState] = useState({
    elementId: asin, 
    comment: "",
    rate: 1,
  });

  const closeModal = () => {
    setShowRatingsArea(false); 
  };

  const handleFormChange = (e) => {
    
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, 
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(postEndPoint, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmYxNjc1OTY1MWJkYTAwMTUzNzQzMDIiLCJpYXQiOjE3MjcwOTY2NjUsImV4cCI6MTcyODMwNjI2NX0.UXtXfqdjoHy6oI3BoRTVjvqRzPDseGvCFoO5nIAzIRo",
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formState), 
      });

      if (!response.ok) {
        throw new Error("Failed to post comment"); 
      }

      const data = await response.json(); 
      console.log(data); 

      closeModal(); 
    } catch (error) {
      console.log("Error posting comment:", error); 
    }
  };

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      elementId: asin,
    }));
  }, [asin]);

  return (
    <>
      <Modal show={showRatingsArea}
      onClick= {(e) => e.stopPropagation()}>
        <Modal.Header 
        onClick={(e) => e.stopPropagation()}
        closeButton>
          <Modal.Title>Aggiungi la tua recensione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Control
              onClick={(e) => e.stopPropagation()}
                type="text"
                name="comment"
                placeholder="Scrivi un commento"
                value={formState.comment} 
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
              onClick={(e) => e.stopPropagation()}
                type="number"
                name="rate"
                min={1}
                max={5}
                value={formState.rate} 
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
              <Button type="submit" variant="success">
                Pubblica commento
              </Button>
              <Button variant="danger" onClick={closeModal}>
                Annulla
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RatingsArea;
