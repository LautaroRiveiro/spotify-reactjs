import styled from 'styled-components'
import { usePlayer } from '../../context/usePlayer'
import { millisToMinutesAndSeconds } from '../../helpers/helpers'

const TracklistGrid = styled.div`
  border: var(--dev-border);
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
  border: var(--dev-border);
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
            <span>{data.track.artists.map(a => a.name).join(", ")}</span>
          </div>
        </TracklistRowAlbum>
      </div>
      <span>
        {data.track.album.name}
      </span>
      <span>
        {new Date(data.added_at).toLocaleDateString('es-ES', { day: "numeric", year: "numeric", month: "short" })}
      </span>
      <span>❤</span>
      <span>
        {millisToMinutesAndSeconds(data.track.duration_ms)}
      </span>
    </TracklistRowContainer>
  )
}

const Tracklist = ({ tracks }) => {

  return (
    <TracklistGrid>
      <TracklistHeader>#</TracklistHeader>
      <TracklistHeader>Título</TracklistHeader>
      <TracklistHeader>Álbum</TracklistHeader>
      <TracklistHeader>Fecha</TracklistHeader>
      <TracklistHeader></TracklistHeader>
      <TracklistHeader>🕒</TracklistHeader>
      {
        tracks.map((track) => (
          <TracklistRow data={track} key={track.track.id} />
        ))
      }
    </TracklistGrid>
  )
}

export default Tracklist