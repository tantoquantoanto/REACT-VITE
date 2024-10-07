import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SearchProvider } from "../ResearchTools/ResearchTools";
import { LightModeProvider } from "../../utilities/LighMode";
import ModifyComments from "./ModifyComments";


describe("Test ModiFyComments Component", () => {
    it("should render two inputs and two buttons", () => {
        const { getByText, getByPlaceholderText } = render(
            <SearchProvider>
                <LightModeProvider>
                    <ModifyComments 
                    isChangeVisible={true}
                    setIsChangeVisible={jest.fn()}
                    id = {"123"}
                    handleUpdateComment={jest.fn()}
                    />
                </LightModeProvider>
            </SearchProvider>
        )

        const saveButtonElement = getByText("Salva Modifica");
        const undoButtonElement = getByText("Annulla Modifica");
        const inputCommentElement = getByPlaceholderText("Cambia il tuo commento");
        const inputRateElement = getByPlaceholderText("Cambia il tuo rate");

        expect(saveButtonElement).toBeInTheDocument();
        expect(undoButtonElement).toBeInTheDocument();
        expect(inputCommentElement).toBeInTheDocument();
        expect(inputRateElement).toBeInTheDocument();




    })
})