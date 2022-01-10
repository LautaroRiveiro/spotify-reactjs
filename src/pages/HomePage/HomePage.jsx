import { useContext } from 'react'
import styled from 'styled-components'
import { Redirect } from 'wouter'
import { Navbar } from '../../components/Navbar'
import { Player } from '../../components/Player'
import { AuthContext } from '../../context/AuthContext'

const HomeLayout = styled.div`
  background-color: var(--background-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
`

const Sidebar = styled.aside`
  flex: 1 1 0;
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-dark);
`

const Logo = styled.img`
  width: 80%;
  max-width: 150px;
  padding: 1rem;
`

const PlaylistsSection = styled.section`
  flex-grow: 1;
  border: 1px solid var(--primary-color);
`

const HomeContainer = styled.main`
  flex-grow: 1;
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: row;
`

const FeedContainer = styled.section`
  flex: 4 1 0;
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: column;
  position: relative;
`

const Topbar = styled.div`
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

const Feed = styled.div`
  flex-grow: 1;
  border: 1px solid var(--primary-color);
`

const HomePage = () => {

  // TODO: Envolver en una Ruta Protegida para replicar en todas las rutas de la app
  const { isLogged } = useContext(AuthContext)
  if(!isLogged) return <Redirect to="/login" />

  return (
    <HomeLayout>
      <HomeContainer>
        <Sidebar>
          <Logo src="/assets/logos/Spotify_Logo_RGB_White.png" alt="logo" />
          <Navbar />
          <PlaylistsSection>
            {
              ['Playlist1', 'Nueva', ''].map((playlist, index) => (
                <div key={index}>{playlist}</div>
              ))
            }
          </PlaylistsSection>
        </Sidebar>
        <FeedContainer>
          <Topbar>
            <div>🔙</div>
            <div>👤</div>
          </Topbar>
          <Feed>
            HomePage
          </Feed>
        </FeedContainer>
      </HomeContainer>
      <Player />
    </HomeLayout>
  )
}

export default HomePage