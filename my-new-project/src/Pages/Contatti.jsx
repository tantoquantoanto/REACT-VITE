import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Footer from "../Components/Footer/Footer"
import Navcomponent from "../Components/Navbar/Navcomponent"
import { useContext } from "react" 
import "./pagescss/contacts.css"
import { LightModeContext } from "../utilities/LighMode"

const Contatti = () => {

    const { isLightMode } = useContext(LightModeContext)

const toggleContactsClass = isLightMode ? "" : "darkContacts"
    return (
        <>
        <Navcomponent/>
        <Container fluid className= {`mt-5 ${toggleContactsClass}`}>
      <h1 className="text-center mb-4">Contattaci</h1>
      
      <Row className="mb-5">
        <Col md={12}>
          <h2>Hai domande o suggerimenti?</h2>
          <p>
            Siamo qui per aiutarti! Compila il modulo qui sotto e ti risponderemo il prima possibile.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <h2>Informazioni di Contatto</h2>
          <p><strong>Email:</strong> info@epibooks.com</p>
          <p><strong>Telefono:</strong> +39 012 345 6789</p>
          <p><strong>Indirizzo:</strong> Via dei Libri, 123, Roma, Italia</p>
        </Col>

        <Col md={6}>
          <h2>Compila il Modulo</h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Inserisci il tuo nome" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Inserisci la tua email" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Messaggio</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Scrivi il tuo messaggio" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Invia
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
        <Footer/>
        </>
    )
}

export default Contatti