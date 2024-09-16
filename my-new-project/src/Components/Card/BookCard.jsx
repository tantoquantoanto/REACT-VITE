import "./card.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col } from "react-bootstrap"
import Fantasy from "../Hero/mainAssets/fantasy.json"
import Horror from "../Hero/mainAssets/horror.json"
import Romance from "../Hero/mainAssets/romance.json"

const BookCard = ({img, title, category, price}) => {

  


    return (
      <Col sm= {12} md={4} lg={3}>
        <Card className="cards h-100">
        <Card.Img className="object-fit-contain w-100 h-100" variant="top" src={img} />
        <Card.Body className="cardIn d-flex flex-column align-items-center justify-content-center">
          <div className="cardTitle text-truncate">{title}</div>
          <Card.Text className="card-category">
            {category}
          </Card.Text>
          <Button className="card-btn" variant="primary">{price}</Button>
        </Card.Body>
      </Card>
      </Col>
    )
}

export default BookCard