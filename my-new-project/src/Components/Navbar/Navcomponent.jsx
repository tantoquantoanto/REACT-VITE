
import { Button } from "react-bootstrap";
import "./nav.css"
import { LightModeContext, LightModeProvider } from "../../utilities/LighMode";

import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import useBrowserSize from "../../utilities/browserSize";
import DropDownButton from "../DropDownButton/DropDownButton";
import NavInput from "./NavInput/NavInput";

const Navcomponent = () => {

  const {widht, height} = useBrowserSize()
  console.log(widht, height)
const {isLightMode,toggleLightMode} = useContext(LightModeContext)
const toggleNavLightMode = isLightMode ? "lightNav" : "nav-bar"; 
const location = useLocation();

  return (
    <>
    
    <nav className={`container-fluid  ${toggleNavLightMode}`}>
      <div className="row">
        <div className="col d-flex align-items-center justify-content-between">
          <div className="d-flex h-100">
            <h1> <Link to="/"> EPIBOOKS </Link> </h1>
          </div>
          <Button variant="info" onClick={toggleLightMode}>Light Mode</Button>
    {widht < 768 && (<DropDownButton/>)}
    {widht > 768 && ( <ul className="navList">
           <Link to="/chi-siamo">
           <li>Chi Siamo</li>
           </Link>
           <Link to="/contatti">
           <li>Contatti</li>
           </Link>
           <Link to="/privacy-policy">
           <li>Privacy Policy</li>
           </Link>
          </ul>)}

         
          {location.pathname === "/" && <NavInput />}
        </div>
      </div>
    </nav>
   
    </>
  );
};

export default Navcomponent;
