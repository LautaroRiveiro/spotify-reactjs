import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from '../../components/Navbar'
import { Player } from '../../components/Player'
import { Topbar } from '../../components/Topbar'
import spotifyApi from '../../services/services'
import { FeedContainer, OutletContainer, ApplicationContainer, ApplicationLayout, Logo, PlaylistsSection, PlaylistsSectionItem, Separator, Sidebar } from './styles'

const ApplicationPage = () => {
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
    <ApplicationLayout>
      <ApplicationContainer>
        <Sidebar>
          <Logo to="">
            <img src="/assets/logos/Spotify_Logo_RGB_White.png" alt="logo" />
          </Logo>
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
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </FeedContainer>
      </ApplicationContainer>
      <Player />
    </ApplicationLayout>
  )
}

export default ApplicationPage