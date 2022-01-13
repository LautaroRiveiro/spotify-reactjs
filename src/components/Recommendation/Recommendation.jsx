import { Link } from "react-router-dom"
import styled from "styled-components"

const RecommendationContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  margin-bottom: 2rem;
`
const RecommendationTitle = styled.h3`
  margin: 1.1rem 0;
  font-size: 1.75rem;
  grid-column-start: 1;
  grid-column-end: 5;
`
const RecommendationCard = styled(Link)`

  height: 320px;
  overflow-y: hidden;
  border-radius: 5px;
  background-color: rgba(25, 25, 25);
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: #2e2b2b;
  }

  & img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2px;
    object-fit: cover;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }

  & h4 {
    margin: 1rem 0 0.5rem 0;
    color: white;
    font-weight: bold;
  }

  & span {
    font-weight: lighter;
    color: gainsboro;
  }
`

const Recommendation = ({ title, playlists }) => {
  return (
    <RecommendationContainer>
      <RecommendationTitle>{title}</RecommendationTitle>
      {
        playlists.map((playlist) => (
          <RecommendationCard class="card" to={"/playlist/" + playlist.id}>
            <img src={playlist.images[0]?.url} alt="playlist-cover" />
            <h4>{playlist.name}</h4>
            <span>{playlist.description}</span>
          </RecommendationCard>

        ))
      }
    </RecommendationContainer>
  )
}

export default Recommendation