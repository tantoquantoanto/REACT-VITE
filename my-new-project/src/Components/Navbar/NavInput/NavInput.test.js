import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { SearchProvider } from "../../ResearchTools/ResearchTools";
import { LightModeProvider } from "../../../utilities/LighMode";
import NavInput from "./NavInput";

describe("Test NavInput Comnponent", () => {
  it("should be in the doc and have initial value empty", () => {
    const { getByText, getByPlaceholderText } = render(
      <SearchProvider>
        <LightModeProvider>
          <NavInput />
        </LightModeProvider>
      </SearchProvider>
    );

    const inputElement = getByPlaceholderText("Cerca un libro");
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue("");


    fireEvent.change(inputElement)

  });

  it("should change its value on change", () => {
     const {getByText, getByPlaceholderText} = render(
        <SearchProvider>
        <LightModeProvider>
          <NavInput />
        </LightModeProvider>
      </SearchProvider>
     )
     const inputElement = getByPlaceholderText("Cerca un libro");
     fireEvent.change(inputElement, {
        target:{
            value: "Ciao a tutti"
        }
     }
     );

     expect(inputElement).toHaveValue("Ciao a tutti")


  })


});


