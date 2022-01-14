import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PlaylistGrid } from '../../components/PlaylistGrid'
import { Tracklist } from "../../components/Tracklist"
import spotifyApi from '../../services/services'
import { CategoryItem, CategoryList, SearchPageContainer } from './styles'

const SearchPage = () => {

  const [results, setResults] = useState(null)
  const [categories, setCategories] = useState([])
  const [searchParams] = useSearchParams()
  const randomColor = () => '#' + Math.random().toString(16).substr(-6)

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

  useEffect(() => {
    spotifyApi.getBrowseCategories()
      .then((data) => {
        setCategories(data.slice(0, 16).map(d => { return { ...d, color: randomColor() } }))
      })
  }, [])


  if (!results) {
    return (
      <SearchPageContainer>
        <h2>Explorar categorías</h2>
        <CategoryList>
          {
            categories.map((category) => (
              <CategoryItem to={"?filter=" + category.name} color={category.color} key={category.id}>
                <h4>{category.name}</h4>
                <img src={category.icons[0]?.url} alt="category" />
              </CategoryItem>
            ))
          }
        </CategoryList>
      </SearchPageContainer>
    )
  }
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