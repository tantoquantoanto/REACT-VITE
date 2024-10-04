import "@testing-library/jest-dom";
import DropDownButton from "./DropDownButton";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react";

describe("Test DropDownButton Component", () => {
  it("should render three drop down items on click", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    const { getByText } = render(<DropDownButton />);

    const dropDownButton = getByText("Menu");

    expect(dropDownButton).toBeInTheDocument();

    
        fireEvent.click(dropDownButton)
      
    

    const firstDropItem = getByText("Chi Siamo");
    const secondDropItem = getByText("Contatti");
    const thirdDropItem = getByText("Privacy Policy");

    expect(firstDropItem).toBeInTheDocument();
    expect(secondDropItem).toBeInTheDocument();
    expect(thirdDropItem).toBeInTheDocument();
  });
});
