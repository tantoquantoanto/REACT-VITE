import { Col, Container, Row } from "react-bootstrap";
import menuArray from "../Navbar/nav";
import "./footer.css";
import {
  LogoFacebook,
  LogoGithub,
  LogoInstagram,
  LogoTwitter,
} from "react-ionicons";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center p-5 text-white bg-dark mt-5">
          <Col
            sm={12}
            md={8}
            className="d-flex flex-column align-items-center justify-content-center p-5 gap-5"
          >
            <h3 className="display-4">DREAMY BOOKS</h3>
            <ul className="list-unstyled d-flex gap-2">
              {menuArray.map((menu) => (
                <li>
                  <a href={menu.href}></a>
                  {menu.title}
                </li>
              ))}
            </ul>
            <div className="d-flex gap-4 align-items-center justify-content-center logoDiv">
              <LogoFacebook color={"#FFFFFF"} height="30px" width="30px" className="logo" />
              <LogoTwitter color={"#FFFFFF"} height="30px" width="30px" className="logo" />
              <LogoInstagram color={"#FFFFFF"} height="30px" width="30px" className="logo" />
              <LogoGithub color={"#FFFFFF"} height="30px" width="30px" className="logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
