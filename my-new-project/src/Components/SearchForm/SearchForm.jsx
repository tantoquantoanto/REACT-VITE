import { Col, Form, Row } from "react-bootstrap";
import "./form.css"
import { useState } from "react"


const SearchForm = ({books, setBooks, allBooks}) => {

    
    const [inputValue, setInputValue] = useState("");
    
    const OnChangeInput = (e) => {
        
        setInputValue(e.target.value)


    }

    const showResults = () => {
        if(inputValue === ""){
            setBooks(allBooks)
        }
        else {
           const searchedBooks = books.filter((book) => {
            return book.title.toLowerCase().includes(inputValue.toLowerCase())
           })
           setBooks(searchedBooks)
        }
    }

    return (
        <Row>
            <Col className="d-flex p-3 align-items-center gap-3">
            <Form.Control
            type="text"
            placeholder="Cerca il tuo libro"
            onChange={OnChangeInput}
            />
            <button 
            className="btn btn-primary px-2 py-1"
            onClick={showResults}
            >Cerca</button>
            </Col>
        </Row>
    )
}


export default SearchForm