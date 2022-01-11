import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { usePlayer } from '../../context/usePlayer'
import { millisToMinutesAndSeconds } from '../../helpers/helpers'
import spotifyApi from '../../services/services'

const PlaylistPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-accent-color);
`
const PlaylistHeader = styled.div`
  border: 1px solid var(--primary-color);
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
`
const PlaylistBodyTopbar = styled.div`
  border: 1px solid var(--primary-color);
  padding: 1rem;
  display: flex;

  & div {
    margin-right: 1rem;
    font-size: 2rem;
  }
`
const TracklistGrid = styled.div`
  border: 1px solid var(--primary-color);
  padding: 1rem;
  display: grid;
  grid-template-columns: 3rem 1fr 18rem 12rem 2rem 5rem;
  align-items: center;
  row-gap: 0.5rem;
`
const TracklistHeader = styled.div`
  text-transform: uppercase;
`

const TracklistRowPlay = styled.span`
  cursor: pointer;
  color: var(--text-color);
`

const TracklistRowAlbum = styled.div`
  display: flex;
  border: 1px solid var(--primary-color);
  align-items: center;

  & div {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;

    & span:first-child {
      font-weight: bold;
    }
  }
`

const TracklistRowContainer = styled.div`
  display: contents;
  cursor: pointer;
  &:hover {
    & ${TracklistRowPlay} {
      color: var(--text-accent-color);
    }
  }
`

const TracklistRow = ({ data }) => {

  const { load } = usePlayer()

  const handlePlay = () => {
    if (data.track.preview_url) {
      load(data.track)
    } else {
      console.log("Reproducción no disponible")
    }
  }

  return (
    <TracklistRowContainer onClick={handlePlay}>
      <TracklistRowPlay>▶</TracklistRowPlay>
      <div>
        <TracklistRowAlbum>
          <img src={data.track.album.images[1].url} alt="" width="50" />
          <div>
            <span>{data.track.name}</span>
            <span>{data.track.artists.map(a=>a.name).join(", ")}</span>
          </div>
        </TracklistRowAlbum>
      </div>
      <span>
        {data.track.album.name}
      </span>
      <span>
        {new Date(data.added_at).toLocaleDateString('es-ES', { day: "numeric", year:"numeric", month:"short"})}
      </span>
      <span>❤</span>
      <span>
        {millisToMinutesAndSeconds(data.track.duration_ms)}
      </span>
    </TracklistRowContainer>
  )
}

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
        <PlaylistHeaderCover src={playlist?.images[1]?.url} alt="playlist-cover" />
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
        <PlaylistBodyTopbar>
          <div>▶</div>
          <div>❤</div>
        </PlaylistBodyTopbar>
        <TracklistGrid>
          <TracklistHeader>#</TracklistHeader>
          <TracklistHeader>Título</TracklistHeader>
          <TracklistHeader>Álbum</TracklistHeader>
          <TracklistHeader>Fecha</TracklistHeader>
          <TracklistHeader></TracklistHeader>
          <TracklistHeader>🕒</TracklistHeader>
          {
            playlist.tracks.map((track) => (
              <TracklistRow data={track} key={track.track.id} />
            ))
          }
        </TracklistGrid>
      </PlaylistBody>
      {params.id}
    </PlaylistPageContainer>
  )
}

export default PlaylistPage