import { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../context/AuthContext'

const FavouriteButton = styled.span`
  cursor: pointer;
`

const Favourite = ({ track }) => {

  const { isFavourite, toggleFavourite } = useContext(AuthContext)

  const handleFav = (e) => {
    e.stopPropagation()
    toggleFavourite(track)
  }

  return (
    <FavouriteButton onClick={handleFav}>
      {isFavourite(track) ? '💚' : '🤍'}
    </FavouriteButton>
  )
}

export default Favourite