import Button from "../Button/Button"
import "./hero.css"
import Fantasy from "../Hero/mainAssets/fantasy.json"
import History from  "../Hero/mainAssets/history.json"
import Horror from "../Hero/mainAssets/horror.json"
import Romance from "../Hero/mainAssets/romance.json"
import Scifi from "../Hero/mainAssets/scifi.json"



const Hero = ({title, message, img, btnText}) => {

    const books = [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi];
    const randomIndex = Math.floor(Math.random()*books.length);
    const randomBook = books[randomIndex];
    console.log(randomBook);
    

 return(
    <section className="container">
        <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center jumbotron">
                <h1 className="mt-5 p-5">{randomBook.title}</h1>
                <p className="lead"> {randomBook.category}
                </p>
                <hr className="my-4"/>
                <img className="object-fit-cover h-25 w-25" src={randomBook.img} alt="immagine libro" />
                <div className="d-flex align-items-center justify-content-center g-3"></div> 
                <Button
                 text={randomBook.price} variant={"primary"}
                />
               
            </div>
        </div>
    </section>
 )
}

export default Hero