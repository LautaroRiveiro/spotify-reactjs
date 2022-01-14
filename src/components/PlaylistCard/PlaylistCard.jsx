import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PlaylistCardContainer = styled(Link)`

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
    color: var(--text-accent-color);
    font-weight: bold;
  }

  & span {
    font-weight: lighter;
    color: var(--text-color);
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const PlaylistCard = ({data}) => {

  return (
    <PlaylistCardContainer to={"/playlist/" + data.id}>
      <img src={data.images[0]?.url} alt="playlist-cover" />
      <h4>{data.name}</h4>
      <span>{data.description}</span>
    </PlaylistCardContainer>
  )
}

export default PlaylistCard