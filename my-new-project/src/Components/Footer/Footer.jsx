import { Col, Container, Row } from "react-bootstrap";
import menuArray from "../Navbar/nav";
import "./footer.css";
import {
  LogoFacebook,
  LogoGithub,
  LogoInstagram,
  LogoTwitter,
} from "react-ionicons";
import { useContext } from "react";
import { LightModeContext } from "../../utilities/LighMode";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isLightMode } = useContext(LightModeContext);

  const toggleFooterClass = isLightMode ? "lightFooter" : "footerRow";

  return (
    <footer>
      <Container fluid>
        <Row
          className={`${toggleFooterClass} d-flex align-items-center justify-content-center py-5 mt-5`}
        >
          <Col
            sm={12}
            md={8}
            className="d-flex flex-column align-items-center justify-content-center gap-5"
          >
            <h3 className="display-4">EPIC BOOKS</h3>
            <ul className="list-unstyled d-flex gap-2">
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
            <div className="d-flex gap-4 align-items-center justify-content-center logoDiv">
              <LogoFacebook
                color={"#FF6F61"}
                height="30px"
                width="30px"
                className="logo"
              />
              <LogoTwitter
                color={"#FF6F61"}
                height="30px"
                width="30px"
                className="logo"
              />
              <LogoInstagram
                color={"#FF6F61"}
                height="30px"
                width="30px"
                className="logo"
              />
              <LogoGithub
                color={"#FF6F61"}
                height="30px"
                width="30px"
                className="logo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
