import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import Navcomponent from "../Components/Navbar/Navcomponent";
import useLocalStorage from "../utilities/useLocalStorage";
import "./pagescss/contacts.css"
import { LightModeContext } from "../utilities/LighMode";

const Contatti = () => {

  const { isLightMode } = useContext(LightModeContext);

  const toggleContactsClass = isLightMode ? "" : "darkContacts";

 
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const [, setStoredUserData] = useLocalStorage("userData", {});

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setUserData((prevData) => ({
      ...prevData, 
      [name]: value, 
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    setStoredUserData(userData);

    console.log("Form inviato e dati salvati nel localStorage:", userData);
    alert("Dati salvati nel local storage!");
  };

  return (
    <>
      <Navcomponent />
      <Container fluid className=  {`mt-5 ${toggleContactsClass}`}>
        <h1 className="text-center mb-4">Contattaci</h1>

        <Row>
          <Col md={6}>
            <h2>Compila il Modulo</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="name" 
                  value={userData.name} 
                  onChange={handleChange} 
                  placeholder="Inserisci il tuo nome"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email" 
                  value={userData.email} 
                  onChange={handleChange} 
                  placeholder="Inserisci la tua email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Messaggio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message" 
                  value={userData.message} 
                  onChange={handleChange} o
                  placeholder="Scrivi il tuo messaggio"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Invia
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contatti;
