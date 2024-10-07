import { useState } from "react";

const useLocalStorage = (key, initialState) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      
      return value ? JSON.parse(value) : initialState;
    } catch (error) {
      console.log("Errore nel recupero dal localStorage:", error);
      return initialState;
    }
  });

  const setValueOnLocalStorage = (value) => {
    try {
      console.log(`Salvataggio nel localStorage: ${key} = ${JSON.stringify(value)}`); 
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
      console.log(`Dopo il salvataggio, localStorage contiene: ${localStorage.getItem(key)}`);
    } catch (error) {
      console.log("Errore nel salvataggio nel localStorage:", error);
    }
  };

  return [storedValue, setValueOnLocalStorage];
};

export default useLocalStorage;
