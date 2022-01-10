import styled from 'styled-components'
import { NavButton } from "."

const NavbarContainer = styled.nav`
  border: 1px solid var(--primary-color);
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavButton title="Inicio" icon="🏠" />
      <NavButton title="Buscar" icon="🔍"/>
      <NavButton title="Tu biblioteca" icon="📚" />
      <br />
      <NavButton title="Crear playlist" icon="➕" />
      <NavButton title="Tus me gusta" icon="🤍" />
    </NavbarContainer>
  )
}

export default Navbar