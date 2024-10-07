import { createContext, useEffect, useState } from "react";
import Fantasy from "../../assets/mainAssets/fantasy.json";
import Horror from  "../../assets/mainAssets/horror.json";
import History from  "../../assets/mainAssets/history.json";
import Romance from  "../../assets/mainAssets/romance.json";
import Scifi from  "../../assets/mainAssets/scifi.json";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isBookError, setIsBookError] = useState("");
  const [isBookLoading, setIsBookLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  const combinedBooksArray = [
    ...Fantasy.slice(0, 10),
    ...Horror.slice(0, 10),
    ...Romance.slice(0, 10),
    ...Scifi.slice(0, 10),
    ...History.slice(0, 10),
  ];

  const getBooksFromStaticData = () => {
    setIsBookLoading(true);
    setIsBookError("");

    setTimeout(() => {
      try {
        setAllBooks(combinedBooksArray);
        setBooks(combinedBooksArray);
      } catch (error) {
        setIsBookError(error.message);
        console.log(error);
      } finally {
        setIsBookLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    getBooksFromStaticData();
  }, []);

  return (
    <SearchContext.Provider
      value={{ books, setBooks, allBooks, isBookLoading, isBookError }}
    >
      {children}
    </SearchContext.Provider>
  );
};
