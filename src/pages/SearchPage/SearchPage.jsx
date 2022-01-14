import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PlaylistGrid from '../../components/Recommendation/PlaylistGrid'
import { Tracklist } from "../../components/Tracklist"
import spotifyApi from '../../services/services'
import { SearchPageContainer, CategoryItem, CategoryList } from './styles'

const SearchPage = () => {

  const [results, setResults] = useState(null)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const filter = searchParams.get("filter")
    if (filter) {
      spotifyApi.search(filter)
        .then((data) => {
          setResults(data)
        })
    } else {
      if (results) {
        setResults(null)
      }
    }
  }, [searchParams])


  if (!results) return (
    <>
      <h2>TODO: Recomendaciones</h2>
      <CategoryList>
        ddd
        <CategoryItem>asd</CategoryItem>
        <CategoryItem>asd</CategoryItem>
        <CategoryItem>asd</CategoryItem>
        <CategoryItem>asd</CategoryItem>
      </CategoryList>
    </>
  )
  return (
    <SearchPageContainer>
      <h2>Canciones</h2>
      <Tracklist search tracks={results.tracks.items.map((track) => {
        return { track }
      })} />
      <PlaylistGrid title={"Playlists"} playlists={results.playlists.items} />
    </SearchPageContainer>
  )
}

export default SearchPage