import styled from 'styled-components'
import { NavButton } from "."

const NavbarContainer = styled.nav`
  border: 1px solid var(--primary-color);
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavButton title="Inicio" icon="🏠" to="" />
      <NavButton title="Buscar" icon="🔍" to="search" />
      <NavButton title="Favoritos" icon="⭐" to="favourites" />
    </NavbarContainer>
  )
}

export default Navbar