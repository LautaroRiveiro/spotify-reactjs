import { useEffect, useState } from 'react'
import { Logo, PlaylistsSection, PlaylistsSectionItem, Separator, SidebarContainer } from './styles'
import spotifyApi from '../../services/services'
import { Navbar } from '../Navbar'

const Sidebar = () => {

  const [myPlaylists, setMyPlaylists] = useState([])

  useEffect(() => {
    spotifyApi.getMyPlaylists()
      .then((data) => {
        setMyPlaylists(data.items)
      })
  }, [])

  return (
    <SidebarContainer>
      <Logo to="">
        <img src="/assets/logos/Spotify_Logo_RGB_White.png" alt="logo" />
      </Logo>
      <Navbar />
      <Separator />
      <PlaylistsSection>
        {
          myPlaylists.map(({ id, name }) => (
            <PlaylistsSectionItem key={id} to={`playlist/${id}`}>
              {name}
            </PlaylistsSectionItem>
          ))
        }
      </PlaylistsSection>
    </SidebarContainer>
  )
}

export default Sidebar