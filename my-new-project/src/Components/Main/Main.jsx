import "./main.css"
import {Container, Row} from "react-bootstrap"
import Fantasy from "../Hero/mainAssets/fantasy.json"
import Horror from "../Hero/mainAssets/horror.json"
import Romance from "../Hero/mainAssets/romance.json"
import BookCard from "../Card/BookCard"



const Main = () => {
    const FantasyArray = Fantasy.slice(0,4);
    const HorrorArray = Horror.slice(0,4);
    const RomanceArray = Romance.slice(0,4);
    
    return(
        <Container> 
            <Row className="d-flex justify-content-center">
                <h3 className="mt-2 mb-2 align-self-start"> Fantasy books</h3>
                {FantasyArray.map(book =>(
                    <BookCard
                    title = {book.title}
                    img = {book.img}
                    category={book.category}
                    price = {book.price}
                    />
                ))}
                
               
            </Row>
            <Row className="d-flex justify-content-center">
                <h3 className="mt-2 mb-2 align-self-start"> Horror books</h3>
                {HorrorArray.map(book =>(
                    <BookCard
                    title = {book.title}
                    img = {book.img}
                    category={book.category}
                    price = {book.price}
                    />
                ))}
                
               
            </Row>
            <Row className="d-flex justify-content-center">
                <h3 className="mt-2 mb-2 align-self-start"> Romance books</h3>
                {RomanceArray.map(book =>(
                    <BookCard
                    title = {book.title}
                    img = {book.img}
                    category={book.category}
                    price = {book.price}
                    />
                ))}
                
               
            </Row>
        </Container>
        


    )
}
 

export default Main;
