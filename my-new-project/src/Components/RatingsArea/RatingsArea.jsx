import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
const postEndPoint = `https://striveschool-api.herokuapp.com/api/comments`;

const RatingsArea = ({ asin, showRatingsArea, setShowRatingsArea}) => {
  const [formState, setFormState] = useState({
    elementId: asin,  
    comment: "",
    rate: 1,
  });

  const closeModal = () => {
    setShowRatingsArea(!showRatingsArea)
  }

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

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
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
    <Modal show = {showRatingsArea}>
        <Modal.Header>
            Aggiungi qui la tua recensione
        </Modal.Header>
        <Modal.Body>
      <Form onSubmit={onSubmit}>
        <Form.Control
          type="text"
          name="comment"
          required
          placeholder="Scrivi un commento"
          onChange={handleFormChange}
        />
        <Form.Control
          type="number"
          name="rate"
          min={1}
          max={5}
          required
          placeholder="Valutazione (1-5)"
          onChange={handleFormChange}
        />
        <div className="d-flex align-items-center justify-content-center gap-2"><Button type="info" variant="success"
        onClick={closeModal}>
          Pubblica commento
        </Button>
        <Button  variant="danger"
        onClick={closeModal}>
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
