import { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import { Navbar } from '../../components/Navbar'
import { Player } from '../../components/Player'
import { Topbar } from '../../components/Topbar'
import spotifyApi from '../../services/services'
import { FeedLayout, FeedContainer, HomeContainer, HomeLayout, Logo, PlaylistsSection, Sidebar, PlaylistsSectionItem, Separator } from './styles'

const ApplicationPage = () => {
  console.log("APPLICATION PAGE")

  const [myPlaylists, setMyPlaylists] = useState([])

  useEffect(() => {
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
      .then((resp) => {
        console.log('getArtistAlbums', resp)
      })
    spotifyApi.getMyPlaylists()
      .then((data) => {
        console.log('getMyPlaylist', data)
        setMyPlaylists(data.items)
      })
    // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
    //   .then((resp) => {
    //     console.log('getArtistAlbums', resp)
    //   })
    // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
    //   .then((resp) => {
    //     console.log('getArtistAlbums', resp)
    //   })
  }, [])

  return (
    <HomeLayout>
      <HomeContainer>
        <Sidebar>
          <Link to="">
            <Logo src="/assets/logos/Spotify_Logo_RGB_White.png" alt="logo" />
          </Link>
          <Navbar />
          <Separator />
          <PlaylistsSection>
            {
              myPlaylists.map(({id, name}) => (
                <PlaylistsSectionItem key={id} to={`playlist/${id}`}>
                  {name}
                </PlaylistsSectionItem>
              ))
            }
          </PlaylistsSection>
        </Sidebar>
        <FeedContainer>
          <Topbar />
          <FeedLayout>
            <Outlet />
          </FeedLayout>
        </FeedContainer>
      </HomeContainer>
      <Player />
    </HomeLayout>
  )
}

export default ApplicationPage