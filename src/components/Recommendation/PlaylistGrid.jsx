import styled from "styled-components"
import { PlaylistCard } from "../PlaylistCard"

const RecommendationContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-bottom: 2rem;
`
const RecommendationTitle = styled.h3`
  margin: 1.1rem 0 0 0;
  font-size: 1.75rem;
  grid-column-start: 1;
  grid-column-end: 5;
`

const PlaylistGrid = ({ title, playlists }) => {
  return (
    <RecommendationContainer>
      <RecommendationTitle>{title}</RecommendationTitle>
      {
        playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} data={playlist} />
        ))
      }
    </RecommendationContainer>
  )
}

export default PlaylistGrid