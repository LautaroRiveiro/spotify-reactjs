import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const FilterContainer = styled.div`
  flex: 1;
  margin: 0 1rem;
`
const SearchBox = styled.input`
  height: 2.5rem;
  width: 50%;
  min-width: 25rem;
  flex: 1;
  border-radius: 50px;
  border: none;
  padding: 0 3rem;
  position: relative;

  &:after {
  content: "🔍";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

  /* &::-webkit-search-decoration,
&::-webkit-search-cancel-button,
&::-webkit-search-results-button,
&::-webkit-search-results-decoration {
  -webkit-appearance:none;
} */

  /* &::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  content: 'X';
} */
`

const SearchBar = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get("filter") ?? ''
  const [text, setText] = useState(filter)


  useEffect(() => {

    const t = setTimeout(() => {
      if (filter !== text) {
        setSearchParams({ filter: text })
      }
    }, 1000)

    return () => {
      clearInterval(t)
    }

  }, [text, setSearchParams, filter])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <FilterContainer>
      <SearchBox type="search" value={text} onChange={handleChange} placeholder='Canciones o playlists' />
    </FilterContainer>
  )
}

export default SearchBar