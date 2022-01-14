import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Recommendation from '../../components/Recommendation/Recommendation'
import { Tracklist } from "../../components/Tracklist"
import spotifyApi from '../../services/services'
import { SearchPageContainer } from './styles'

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


  if (!results) return <h2>TODO: Recomendaciones</h2>

  return (
    <SearchPageContainer>
      <h2>Canciones</h2>
      <Tracklist search tracks={results.tracks.items.map((track) => {
        return { track }
      })} />
      <Recommendation title={"Playlists"} playlists={results.playlists.items} />
    </SearchPageContainer>
  )
}

export default SearchPage