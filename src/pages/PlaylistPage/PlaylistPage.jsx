import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Tracklist } from '../../components/Tracklist'
import spotifyApi from '../../services/services'

const PlaylistPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-accent-color);
`
const PlaylistHeader = styled.div`
  border: var(--dev-border);
  height: 40vh;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
`
const PlaylistHeaderCover = styled.img`
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  box-shadow: 0 0 30px rgba(0,0,0,0.4);
`
const PlaylistHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  & h3 {
    margin: 0;
    font-size: 6rem;
  }
`
const PlaylistHeaderInfoDetails = styled.div`
  display: flex;

  & span {
    margin-left: 0.25rem;
  }

  & span:first-child {
    font-weight: bold;
  }
`
const PlaylistBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`
const PlaylistBodyTopbar = styled.div`
  border: var(--dev-border);
  padding: 1rem;
  display: flex;

  & div {
    margin-right: 1rem;
    font-size: 2rem;
  }
`

const PlaylistPage = () => {

  const params = useParams()
  const [playlist, setPlaylist] = useState(null)
  useEffect(() => {
    spotifyApi.getPlaylist(params.id)
      .then((data) => {
        console.log({ data })
        const _playlist = {
          id: data.id,
          followers: data.followers.total,
          description: data.description,
          images: data.images,
          name: data.name,
          owner: data.owner.display_name,
          primary_color: data.primary_color,
          public: data.public,
          tracks: data.tracks.items
        }
        setPlaylist(_playlist)
      })
  }, [params])

  if (!playlist) return <div>Cargando...</div>

  return (
    <PlaylistPageContainer>
      <PlaylistHeader>
        <PlaylistHeaderCover src={playlist?.images[1]?.url || playlist?.images[0]?.url} alt="playlist-cover" />
        <PlaylistHeaderInfo>
          <span>PLAYLIST</span>
          <h3>{playlist.name}</h3>
          <PlaylistHeaderInfoDetails>
            <span>{playlist.owner}</span>
            <span>-</span>
            <span>{playlist.followers} "me gusta"</span>
            <span>-</span>
            <span>{playlist.tracks.length} canciones</span>
          </PlaylistHeaderInfoDetails>
        </PlaylistHeaderInfo>
      </PlaylistHeader>
      <PlaylistBody>
        {/* <PlaylistBodyTopbar>
          <div>▶</div>
          <div>❤</div>
        </PlaylistBodyTopbar> */}
        <Tracklist tracks={playlist.tracks} />
      </PlaylistBody>
    </PlaylistPageContainer>
  )
}

export default PlaylistPage