import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const postEndPoint = `https://striveschool-api.herokuapp.com/api/comments`;

const RatingsArea = ({ asin, showRatingsArea, setShowRatingsArea }) => {
  const [formState, setFormState] = useState({
    elementId: asin, // ID del libro
    comment: "",
    rate: 1,
  });

  const closeModal = () => {
    setShowRatingsArea(false); // Chiudi il modal
  };

  const handleFormChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, // Aggiorna il form
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevenire il reload della pagina
    try {
      const response = await fetch(postEndPoint, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmYxNjc1OTY1MWJkYTAwMTUzNzQzMDIiLCJpYXQiOjE3MjcwOTY2NjUsImV4cCI6MTcyODMwNjI2NX0.UXtXfqdjoHy6oI3BoRTVjvqRzPDseGvCFoO5nIAzIRo",
          "Content-Type": "application/json", // Headers richiesti
        },
        body: JSON.stringify(formState), // Dati inviati nel body
      });

      if (!response.ok) {
        throw new Error("Failed to post comment"); // Gestione errori
      }

      const data = await response.json(); // Risposta dal server
      console.log(data); // Log della risposta

      closeModal(); // Chiudi il modal solo se la richiesta è andata a buon fine
    } catch (error) {
      console.log("Error posting comment:", error); // Log degli errori
    }
  };

  useEffect(() => {
    // Aggiorna l'elementId nel formState quando cambia l'asin
    setFormState((prevState) => ({
      ...prevState,
      elementId: asin,
    }));
  }, [asin]);

  return (
    <>
      <Modal show={showRatingsArea} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi la tua recensione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="comment"
                placeholder="Scrivi un commento"
                value={formState.comment} // Controllo sul valore
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                name="rate"
                min={1}
                max={5}
                value={formState.rate} // Controllo sul valore
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
