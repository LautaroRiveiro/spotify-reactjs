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

export const Topbar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 50px;
  border: 1px solid var(--primary-color);
  background-color: rgba(25, 20, 20,0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  & div {
    background-color: rgba(25, 20, 20,0.9);
    padding: 0.5rem;
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
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