import { useContext } from "react";
import { SearchContext } from "../ResearchTools/ResearchTools";

const NavInput = () => {

    const {inputValue, setInputValue, onChangeInput, searchBooks} = useContext(SearchContext)






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