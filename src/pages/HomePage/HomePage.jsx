import { useEffect, useState } from 'react'
import styled from 'styled-components'
import RecentItem from '../../components/RecentItem/RecentItem'
import { PlaylistGrid } from '../../components/PlaylistGrid'
import spotifyApi from '../../services/services'

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-accent-color);
`
const Hello = styled.h1`
  margin: 0;
  border: var(--dev-border);
`

const RecentGrid = styled.div`
  display: grid;
  grid-template-columns: calc(33% - 1.33rem) calc(33% - 1.33rem) calc(33% - 1.33rem);
  row-gap: 1em;
  column-gap: 2rem;
  border: var(--dev-border);
  margin: 1rem 0;
`


const HomePage = () => {

  const [playlists, setPlaylists] = useState([])
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    spotifyApi.getCategoryPlaylists('dinner')
      .then((data) => { setPlaylists(data.playlists.items) })
    spotifyApi.getHomePlaylists()
      .then((data) => { setRecommendations(data) })
  }, [])

  return (
    <FeedContainer>
      <Hello>Buenas noches!</Hello>
      <RecentGrid>
        {
          playlists.slice(0, 6).map(({ id, name, images }) => (
            <RecentItem key={id} id={id} title={name} src={images[0].url} />
          ))
        }
      </RecentGrid>
      {
        recommendations.map((recommendation, index) => (
          <PlaylistGrid key={index} title={recommendation.message} playlists={recommendation.playlists.items} />
        ))
      }
    </FeedContainer>
  )
}

export default HomePage