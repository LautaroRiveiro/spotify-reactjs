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
const Hello = styled.h1`
  margin: 0;
  border: 1px solid var(--primary-color);
`

const RecentGrid = styled.div`
  display: grid;
  grid-template-columns: calc(33% - 1.33rem) calc(33% - 1.33rem) calc(33% - 1.33rem);
  row-gap: 1em;
  column-gap: 2rem;
  border: 1px solid var(--primary-color);
  margin: 1rem 0;
`



const CategoryList = styled.div`
  margin: 0;
`

const CategoryItem = styled.div`
  margin: 0;
`

const HomePage = () => {

  const [playlists, setPlaylists] = useState([])

  useEffect(()=>{
    spotifyApi.getCategoryPlaylists('dinner')
    .then((data)=>{setPlaylists(data.playlists.items)})
  },[])

  return (
    <FeedContainer>
      <Hello>Buenas noches!</Hello>
      <RecentGrid>
        {
          playlists.slice(0, 6).map(({id, name, images})=>(
            <RecentItem key={id} title={name} src={images[0].url} ></RecentItem>
          ))
        }
      </RecentGrid>
      <CategoryList>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
      </CategoryList>
    </FeedContainer>
  )
}

export default HomePage