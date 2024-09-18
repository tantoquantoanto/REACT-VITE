import "../Components/Navbar/nav.css";
import menuArray from "./Navbar/nav";

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
            {menuArray.map((item) => (
              <li>
                <a href={item.href}> {item.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navcomponent;
