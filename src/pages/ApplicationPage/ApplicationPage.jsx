import { useContext, useEffect } from 'react'
import { Outlet, Navigate, Link } from "react-router-dom"
import { Navbar } from '../../components/Navbar'
import { Topbar } from '../../components/Topbar'
import { Player } from '../../components/Player'
import { AuthContext } from '../../context/AuthContext'
import spotifyApi from '../../services/services'
import { Feed, FeedContainer, HomeContainer, HomeLayout, Logo, PlaylistsSection, Sidebar } from './styles'

const ApplicationPage = () => {
console.log("APPLICATION PAGE")
  // TODO: Envolver en una Ruta Protegida para replicar en todas las rutas de la app
  const { isLogged } = useContext(AuthContext)

  useEffect(() => {
    // TODO: No sé cómo evitar que se efectúe el fetch si no está logueado, sin volver a validar isLogged. Será que está bien, pero que con un wrapper de RutaProtegida entonces queda más prolijo?
    console.log("USE EFFECT")
    if (isLogged) {
      spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
        .then((resp) => {
          console.log({ resp })
        })
    }
  }, [isLogged])

  if (!isLogged) return <Navigate to="/login" />

  return (
    <HomeLayout>
      <HomeContainer>
        <Sidebar>
          <Link to="">
            <Logo src="/assets/logos/Spotify_Logo_RGB_White.png" alt="logo" />
          </Link>
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
          <Topbar />
          <Feed>
          <Outlet />
          </Feed>
        </FeedContainer>
      </HomeContainer>
      <Player />
    </HomeLayout>
  )
}

export default ApplicationPage