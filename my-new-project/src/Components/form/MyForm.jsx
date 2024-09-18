import { Button, Col, Container, Row } from "react-bootstrap"
import { useState } from "react"

const MyForm = () => {
    const [actualLocalStorage, setActualLocalStorage] = useState(JSON.parse(localStorage.getItem("toDo")));

    const [actualValue, setActualValue] = useState({
        name:"",
        surname:"",
        email:"",
        telephone:""
    });
    console.log(actualValue);

    const updateLocalStorage = () => {
        localStorage.setItem("toDo", JSON.stringify(actualLocalStorage))

    
    }

    const inputChange = (e) => {
        const {name, value} = e.target
        setActualValue({
            ...actualValue,
            [name] : value,
        })
        


    }


    
    



    return(
        <Container>
            <Row>
                <Col>
                <form className="d-flex flex-column gap-3 mt-3">
                    <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={inputChange}
                      />
                       <input 
                    type="text"
                    placeholder="surname"
                    name="surname"
                    onChange={inputChange}
                      />
                       <input 
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={inputChange}
                      />
                      <input 
                    type="number"
                    placeholder="telephone"
                    name="telephone"
                    onChange={inputChange}
                      />
                     <Button
                     className="p-2"
                     type="submit">
                        Invia Form

                     </Button>

        </form>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex flex-column gap-3">
                <div className="d-flex gap-5">
                   <span>Il mio nome è {actualValue.name}
                   </span> 
                   <button className="btn btn-danger">Rimuovi</button>
                   </div>
                   <div className="d-flex gap-5">
                   <span>Il mio cognome è {actualValue.surname}
                   </span> 
                   <button className="btn btn-danger">Rimuovi</button>
                   </div>
                   <div className="d-flex gap-5">
                   <span>La mia email è {actualValue.email}
                   </span> 
                   <button className="btn btn-danger">Rimuovi</button>
                   </div>
                   <div className="d-flex gap-5">
                   <span>Il mio numero è {actualValue.telephone}
                   </span> 
                   <button className="btn btn-danger">Rimuovi</button>
                   </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default MyForm