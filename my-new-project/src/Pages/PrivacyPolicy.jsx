import { Col, Container, Row } from "react-bootstrap"

import Footer from "../Components/Footer/Footer"
import Navcomponent from "../Components/Navbar/Navcomponent"

const PrivacyPolicy = () => {
    return(
        <>
        <Navcomponent/>
        <Container>
            <Row>
                <Col className="d-flex align-items-center justify-content-center">
                <p className="display-5"><strong>PRIVACY POLICY</strong> </p>
                </Col>
            </Row>
        </Container>


        <Footer/>
        </>
    )
}

export default PrivacyPolicy