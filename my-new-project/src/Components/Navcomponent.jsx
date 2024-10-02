
import { Button } from "react-bootstrap";
import "../Components/Navbar/nav.css";
import { LightModeContext, LightModeProvider } from "../utilities/LighMode";
import NavInput from "./NavInput/NavInput";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";

const Navcomponent = () => {
const {isLightMode,toggleLightMode} = useContext(LightModeContext)
const toggleNavLightMode = isLightMode ? "lightNav" : "nav-bar"; 
const location = useLocation();

  return (
    <>
    
    <nav className={`container-fluid  ${toggleNavLightMode}`}>
      <div className="row">
        <div className="col d-flex align-items-center justify-content-between">
          <div className="d-flex h-100">
            <img
              className="navImg"
              src="https://picsum.photos/80/50"
              alt="logo"
            />
          </div>
          <Button variant="info" onClick={toggleLightMode}>Light Mode</Button>
          <ul className="navList">
           <Link to="/chi-siamo">
           <li>Chi Siamo</li>
           </Link>
           <Link to="/contatti">
           <li>Contatti</li>
           </Link>
           <Link to="/privacy-policy">
           <li>Privacy Policy</li>
           </Link>
          </ul>
          {location.pathname === "/" && <NavInput />}
        </div>
      </div>
    </nav>
   
    </>
  );
};

export default Navcomponent;
