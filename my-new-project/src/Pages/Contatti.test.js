import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import Contatti from "./Contatti";
import { SearchProvider } from "../Components/ResearchTools/ResearchTools";
import { LightModeProvider } from "../utilities/LighMode";
import { MemoryRouter } from "react-router-dom";

describe("Test Contatti Component", () => {
  it("should be in the document and have initial values empty", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouter>
        <SearchProvider>
      <LightModeProvider>
        <Contatti />
      </LightModeProvider>
      </SearchProvider>
      </MemoryRouter>
    );

    const nameInput = getByPlaceholderText("Inserisci il tuo nome");
    const emailInput = getByPlaceholderText("Inserisci la tua email");
    const messageInput = getByPlaceholderText("Scrivi il tuo messaggio");

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });

  it("should change its value on change", () => {
    const { getByPlaceholderText } = render(
        <MemoryRouter>
        <SearchProvider>
      <LightModeProvider>
        <Contatti />
      </LightModeProvider>
      </SearchProvider>
      </MemoryRouter>
    );

    const nameInput = getByPlaceholderText("Inserisci il tuo nome");
    const emailInput = getByPlaceholderText("Inserisci la tua email");
    const messageInput = getByPlaceholderText("Scrivi il tuo messaggio");

    fireEvent.change(nameInput, {
      target: { value: "Mario Rossi" },
    });
    fireEvent.change(emailInput, {
      target: { value: "mario.rossi@example.com" },
    });
    fireEvent.change(messageInput, {
      target: { value: "Ciao, questo è un messaggio." },
    });

    expect(nameInput).toHaveValue("Mario Rossi");
    expect(emailInput).toHaveValue("mario.rossi@example.com");
    expect(messageInput).toHaveValue("Ciao, questo è un messaggio.");
  });

  it("should call handleSubmit on form submission", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouter>
        <SearchProvider>
      <LightModeProvider>
        <Contatti />
      </LightModeProvider>
      </SearchProvider>
      </MemoryRouter>
    );

    const nameInput = getByPlaceholderText("Inserisci il tuo nome");
    const emailInput = getByPlaceholderText("Inserisci la tua email");
    const messageInput = getByPlaceholderText("Scrivi il tuo messaggio");
    const submitButton = getByText("Invia");

    
    fireEvent.change(nameInput, { target: { value: "Mario Rossi" } });
    fireEvent.change(emailInput, { target: { value: "mario.rossi@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Ciao, questo è un messaggio." } });

   
    

})
});
