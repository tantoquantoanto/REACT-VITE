import { Col, Container, Row } from "react-bootstrap"
import Footer from "../Components/Footer/Footer"
import Navcomponent from "../Components/Navcomponent"

const ChiSiamo = () => {
    return (
        <>
        <Container>
            <Row>
                <Col className="d-flex align-items-center justify-content-center">
                <div>CHI SIAMO</div>
                </Col>
            </Row>
        </Container>


        <Footer/>
        </>
    )
}

export default ChiSiamo