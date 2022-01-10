import styled from 'styled-components'

const Button = styled.div`
  transition: 200ms color ease-in;
  display:flex;
  line-height: 1.2em;
  vertical-align: middle;
  padding: 0.5rem;
  cursor: pointer;
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

const NavButton = ({ title, icon }) => {
  return (
    <Button> <span>{icon}</span> <span>{title}</span></Button>
  )
}
export default NavButton