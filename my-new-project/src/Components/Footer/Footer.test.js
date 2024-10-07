import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { LightModeContext } from "../../utilities/LighMode";
import { BrowserRouter as Router } from "react-router-dom";

describe("Footer Component", () => {
  const renderWithLightMode = (isLightMode) => {
    return render(
      <LightModeContext.Provider value={{ isLightMode }}>
        <Router>
          <Footer />
        </Router>
      </LightModeContext.Provider>
    );
  };

  it("should render the Footer with links and title", () => {
    renderWithLightMode(true);

    expect(screen.getByText("EPIC BOOKS")).toBeInTheDocument();

    expect(screen.getByText("Chi Siamo")).toBeInTheDocument();
    expect(screen.getByText("Contatti")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });
});
