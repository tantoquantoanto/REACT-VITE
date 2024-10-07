import { Row, Col } from "react-bootstrap"
import DotLoader from "react-spinners/DotLoader"
import "./style.css"

const LoadingSpinner = () => {
    return (
   
        <Row>
            <Col className="d-flex align-items-center justify-content-center h-100 w-100">
            <DotLoader
            className="dotLoader"
            color="#ff6f61"
            data-testid= "loading-spinner"
            
            
            />

            </Col>
        </Row>

    )
}

export default LoadingSpinner