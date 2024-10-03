import { Col, Container, Row } from "react-bootstrap"
import Footer from "../Components/Footer/Footer"
import Navcomponent from "../Components/Navbar/Navcomponent"

const Contatti = () => {
    return (
        <>
        <Navcomponent/>
        <Container>
            <Row>
            <Col className="d-flex align-items-center justify-content-center">
            <p className="display-5"><strong>I NOSTRI CONTATTI</strong> </p>
            </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}

export default Contatti