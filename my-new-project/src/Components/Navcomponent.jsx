
import "../Components/Navbar/nav.css";
import NavInput from "./NavInput/NavInput";
import { Link } from "react-router-dom";

const Navcomponent = () => {
  return (
    <nav className="container-fluid nav-bar">
      <div className="row">
        <div className="col d-flex align-items-center justify-content-between">
          <div className="d-flex h-100">
            <img
              className="navImg"
              src="https://picsum.photos/80/50"
              alt="logo"
            />
          </div>
          <ul className="navList">
           <Link to="/chi-siamo">
           <li>Chi Siamo</li>
           </Link>
          </ul>
          <NavInput/>
        </div>
      </div>
    </nav>
  );
};

export default Navcomponent;
