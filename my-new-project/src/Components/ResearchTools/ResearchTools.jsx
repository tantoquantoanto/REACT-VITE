import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {
    const [isBookError, setIsBookError] = useState("");
    const [isBookLoading, setIsBookLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const endPoint = "https://epibooks.onrender.com/";
    const [allBooks, setAllBooks] = useState([]);
    const [researchedBooks, setResearchedBooks] = useState([]);
  
    const [inputValue, setInputValue] = useState("");
  
    const onChangeInput = (e) => {
      setInputValue(e.target.value);
    };
  
    const showResults = () => {
      if (inputValue === "") {
        setBooks(allBooks);
      } else {
        const searchedBooks = books.filter((book) => {
          return book.title.toLowerCase().includes(inputValue.toLowerCase());
        });
        setBooks(searchedBooks);
      }
    };
  
    const getBooksFromApi = async () => {
      setIsBookLoading(true);
      try {
        const response = await fetch(endPoint);
        const data = await response.json();
        setBooks(data);
        setIsBookLoading(false);
        setAllBooks(data);
        console.log(data);
      } catch (error) {
        setIsBookError(error.message);
        console.log(error);
      } finally {
        setIsBookLoading(false);
      }
    };
  
    const searchBooks = () => {
      if (inputValue === "") {
        setBooks(allBooks);
      } else {
        const searchedBooks = allBooks.filter((book) => {
          return book.title.toLowerCase().includes(inputValue.toLowerCase());
        });
        setBooks(searchedBooks);
        setResearchedBooks(searchedBooks);
      }
    };
  
    useEffect(() => {
      getBooksFromApi();
    }, []);
 

    return (
        <SearchContext.Provider
        value={{inputValue, setInputValue, books, allBooks, isBookLoading, isBookError, showResults, onChangeInput, searchBooks}}>
            {children}
        </SearchContext.Provider>
    )
    


}