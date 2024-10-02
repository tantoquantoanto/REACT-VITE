import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../ResearchTools/ResearchTools";

const NavInput = () => {

    const {books,setBooks, allBooks} = useContext(SearchContext)


    const [inputValue, setInputValue] = useState("");
    console.log(inputValue)
    const onChangeInput = (e) => {
      setInputValue(e.target.value);
    };
  
    const searchBooks = () => {
      if (inputValue === "") {
        setBooks(allBooks); 
      } else {
     
        const searchedBooks = books.filter((book) => 
          book.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        console.log("Searched books:", searchedBooks); 
        setBooks(searchedBooks);
      }
    };
    
  


  return (
    <div className="d-flex align-items-center justify-content-center gap-2">
      <input 
      type="text"
      value={inputValue}
      onChange={onChangeInput} />
      <button 
      className="btn btn-primary"
      onClick={searchBooks}> Cerca </button>
    </div>
  );
};


export default NavInput