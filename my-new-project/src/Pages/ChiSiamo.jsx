import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import Navcomponent from "../Components/Navbar/Navcomponent";

const ChiSiamo = () => {
  return (
    <>
      <Navcomponent />
      <Container className="mt-5">
        <h1 className="text-center mb-4">Chi Siamo</h1>

        <Row className="mb-5">
          <Col md={12}>
            <h2>Benvenuti su EpiBooks!</h2>
            <p>
              Siamo un team appassionato di lettura e di scoperta di nuovi mondi
              attraverso i libri. La nostra missione è fornire una piattaforma
              dove i lettori possono trovare i migliori libri in base ai loro
              interessi e passioni.
            </p>
            <p>
              EpiBooks è più di un semplice sito di libri; è una comunità di
              lettori e scrittori che condividono l'amore per la lettura e la
              scrittura.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h2>Il Nostro Team</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          {[
            {
              name: "Mara Maionchi",
              role: "Fondatrice",
              img: "https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Appassionata di lettura, Mara ha creato EpiBooks per connettere lettori e autori. ",
            },
            {
              name: "Marco Vannini",
              role: "Editor",
              img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Editor esperto, Marco si assicura che ogni libro su EpiBooks sia di alta qualità.",
            },
            {
              name: "Antonietta Andreozzi",
              role: "Sviluppatore",
              img: "https://images.unsplash.com/photo-1496672254107-b07a26403885?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Sviluppatrice web con un amore per i libri, Antonietta costruisce la nostra piattaforma.",
            },
          ].map((member, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={member.img}
                  className="object-fit-cover h-100"
                />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.role}
                  </Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                  <Button variant="primary">Scopri di più</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ChiSiamo;
