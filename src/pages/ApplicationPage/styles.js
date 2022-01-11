import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeLayout = styled.div`
  background-color: var(--background-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
`

export const Sidebar = styled.aside`
  flex: 1 1 0;
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-dark);
`

export const Logo = styled.img`
  width: 80%;
  max-width: 150px;
  padding: 1rem;
`

export const PlaylistsSection = styled.section`
  flex-grow: 1;
  border: 1px solid var(--primary-color);
  display:flex;
  flex-direction: column;
  height: 0;
  overflow-y: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const PlaylistsSectionItem = styled(Link)`
  padding: 0.3rem 0.5rem;
  transition: 200ms color ease-in;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--text-accent-color);
  }
`

export const HomeContainer = styled.main`
  flex-grow: 1;
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: row;
`

export const FeedContainer = styled.section`
  flex: 4 1 0;
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Feed = styled.div`
  flex-grow: 1;
  border: 1px solid var(--primary-color);
  height: 0; // WOOOW
  overflow-y: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`