import { useEffect, useState } from 'react'
import styled from 'styled-components'
import RecentItem from '../../components/RecentItem/RecentItem'
import spotifyApi from '../../services/services'

const FeedContainer = styled.div`
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  color: var(--text-accent-color);
`
const SearchPage = () => {

  const [genres, setGenres] = useState([])

  useEffect(()=>{
    spotifyApi.getAvailableGenreSeeds()
    .then((data)=>{setGenres(data.genres)})
  },[])

  return (
    <FeedContainer>
      Buscar
    </FeedContainer>
  )
}

export default SearchPage