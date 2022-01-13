import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  flex: 0.9 1 0;
  border: var(--dev-border);
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-dark);
  padding: 0 0.5rem;
`

export const Logo = styled(Link)`
  color: inherit;
  text-decoration: none;

  & img {
    width: 80%;
    max-width: 150px;
    padding: 1.75rem 1rem;
  }
`

export const Separator = styled.hr`
  width: 90%;
  border: 0.1px solid rgba(50,50,50,0.75);
`

export const PlaylistsSection = styled.section`
  flex-grow: 1;
  border: var(--dev-border);
  display:flex;
  flex-direction: column;
  height: 0;
  padding: 0 0.5rem;
  overflow-y: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const PlaylistsSectionItem = styled(Link)`
  padding: 0.5rem 0.5rem;
  transition: 200ms color ease-in;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--text-accent-color);
  }
`