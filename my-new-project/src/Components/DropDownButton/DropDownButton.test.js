import '@testing-library/jest-dom'
import DropDownButton from './DropDownButton'
import {fireEvent, render} from '@testing-library/react'



describe('Test DropDownButton Component', () => {
it('should render three drop down items on click', () => {

const { getByText } = render(<DropDownButton/>);

const dropDownButton = getByText('Menu');
const firstDropItem = getByText('Chi Siamo');
const secondDropItem = getByText('Contatti');
const thirdDropItem = getByText('Privacy Policy');

fireEvent.click(dropDownButton)

expect(firstDropItem)
.toBeInTheDocument()



})


})