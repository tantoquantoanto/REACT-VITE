import { Col, Container, Row } from "react-bootstrap";
import "./pagescss/privacy.css";
import Footer from "../Components/Footer/Footer";
import Navcomponent from "../Components/Navbar/Navcomponent";
import { useContext } from "react";
import { LightModeContext } from "../utilities/LighMode";

const PrivacyPolicy = () => {
  const { isLightMode } = useContext(LightModeContext);

  const togglePrivacyClass = isLightMode ? "" : "darkPolicy";

  return (
    <>
      <Navcomponent />
      <Container fluid className={`mt-5 ${togglePrivacyClass}`}>
        <h1 className="text-center mb-4">Informativa sulla Privacy</h1>

        <Row className="mb-5">
          <Col md={12}>
            <h2>Introduzione</h2>
            <p>
              Benvenuti su EpiBooks! La tua privacy è importante per noi. Questa
              informativa sulla privacy spiega come raccogliamo, utilizziamo e
              proteggiamo le tue informazioni personali quando utilizzi il
              nostro sito.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <h2>Raccolta dei Dati</h2>
            <p>
              Raccogliamo informazioni quando ti registri sul nostro sito,
              effettui un acquisto, o interagisci con noi in altri modi. I dati
              raccolti possono includere:
            </p>
            <ul>
              <li>Nome</li>
              <li>Email</li>
              <li>Informazioni di pagamento</li>
              <li>Preferenze di lettura</li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <h2>Utilizzo dei Dati</h2>
            <p>Utilizziamo le informazioni raccolte per:</p>
            <ul>
              <li>Fornire e gestire il nostro servizio</li>
              <li>Migliorare la tua esperienza utente</li>
              <li>
                Comunicare con te riguardo agli aggiornamenti e alle offerte
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <h2>Diritti degli Utenti</h2>
            <p>
              Hai il diritto di accedere, correggere o cancellare i tuoi dati
              personali. Puoi esercitare questi diritti contattandoci tramite le
              informazioni di contatto fornite nel nostro sito.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <h2>Modifiche a Questa Politica</h2>
            <p>
              Ci riserviamo il diritto di aggiornare questa informativa sulla
              privacy. Ti informeremo di eventuali modifiche pubblicando la
              nuova informativa sulla privacy sul nostro sito.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <h2>Contatti</h2>
            <p>
              Se hai domande o dubbi riguardo alla nostra informativa sulla
              privacy, non esitare a contattarci all'indirizzo email:
              info@epibooks.com.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
