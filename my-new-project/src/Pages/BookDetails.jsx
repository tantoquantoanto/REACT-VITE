import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Navcomponent from "../Components/Navcomponent"
import Footer from "../Components/Footer/Footer"


const BookDetails = () => {
   

    const [singleBook, setSingleBook] = useState({})
    
    const [singleBookComments, setSingleBookComments] = useState([])
     

    const getCommentsForTheSingleBook = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`)
        const comments = await response.json()
        setSingleBookComments(comments)
        console.log(comments)

    }


    const {bookId} = useParams()
    const endPoint = `https://epibooks.onrender.com/${bookId}`
    
const getBookFromApi = async () => {
    try{ 
        const response = await fetch(endPoint)
        const data = await response.json();
        setSingleBook(data[0])
        console.log(data)
    }
    catch(e) {
        console.log(e)
    }

} 

useEffect(() => {
getBookFromApi()
},[bookId])

useEffect(() => {
    getCommentsForTheSingleBook()
}, [bookId])


    return (
    <>
    <Navcomponent/>
    <Container>
      <Row className="justify-content-center">
        {/* Colonna per il libro */}
        <Col sm={12} md={6} className="mb-4">
          <Card>
            {singleBook.img && <Card.Img variant="top" src={singleBook.img} />}
            <Card.Body>
              <Card.Title>{singleBook.title}</Card.Title>
              <Card.Text>{singleBook.category}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        
        <Col sm={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Comments</Card.Title>
              {singleBookComments.length > 0 ? (
                singleBookComments.map((singleBookComment) => (
                  <ul className="list-unstyled" key={singleBookComment._id}>
                    <li><strong>Author:</strong> {singleBookComment.author}</li>
                    <li><strong>Comment:</strong> {singleBookComment.comment}</li>
                    <li><strong>Rate:</strong> {singleBookComment.rate}</li>
                    <div className=" d-flex align-items-center justify-content-center gap-2">
                    <Button variant="info" className="mt-2">Modifica</Button>
                    <Button variant="danger" className="mt-2">Rimuovi</Button>
                    </div>
                    <hr />
                  </ul>
                ))
              ) : (
                <p>No comments available.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>




    )
}

export default BookDetails