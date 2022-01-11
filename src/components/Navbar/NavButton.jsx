import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import './NavButton.css'

const StyledNavLink = styled(NavLink)`
  transition: 200ms color ease-in;
  display:flex;
  line-height: 1.2em;
  vertical-align: middle;
  padding: 0.5rem;
  color: inherit;
  text-decoration: none;

  & span:first-child {
    flex: 1 1 0;
  }
  & span {
    flex: 10 1 0;
  }
  &:hover {
    color: var(--text-accent-color);
  }
`

const NavButton = ({ title, icon, to }) => {
  return (
    <StyledNavLink isActive to={to}>
        <span>{icon}</span> <span>{title}</span>
    </StyledNavLink >
  )
}
export default NavButton