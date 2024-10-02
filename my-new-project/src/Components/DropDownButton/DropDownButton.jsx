import { Dropdown, DropdownButton } from "react-bootstrap"

const DropDownButton = () => {

return (
<DropdownButton variant="secondary" title="Menu">
      <Dropdown.Item href="/chi-siamo">Chi Siamo</Dropdown.Item>
      <Dropdown.Item href="/contatti">Contatti</Dropdown.Item>
      <Dropdown.Item href="/privacy-policy">Privacy Policy</Dropdown.Item>
    </DropdownButton>

)

}

export default DropDownButton