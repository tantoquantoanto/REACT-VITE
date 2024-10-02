import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isBookError, setIsBookError] = useState("");
  const [isBookLoading, setIsBookLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const endPoint = "https://epibooks.onrender.com/";
  const [allBooks, setAllBooks] = useState([]);

  const getBooksFromApi = async () => {
    setIsBookLoading(true);
    try {
      const response = await fetch(endPoint);
      const data = await response.json();

      setAllBooks(data);
      setBooks(data);
      console.log(data);
    } catch (error) {
      setIsBookError(error.message);
      console.log(error);
    } finally {
      setIsBookLoading(false);
    }
  };

  useEffect(() => {
    getBooksFromApi();
  }, []);

  return (
    <SearchContext.Provider
      value={{ books, setBooks, allBooks, isBookLoading, isBookError }}
    >
      {children}
    </SearchContext.Provider>
  );
};
