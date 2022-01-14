import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../context/AuthContext'

const FavouriteButton = styled.span`
  cursor: pointer;
`

const Favourite = ({ track }) => {

  const [isFav, setIsFav] = useState(false)
  const { isFavourite, toggleFavourite } = useContext(AuthContext)

  useEffect(() => {
    console.log("UseEffect FAVORUTIE")
    setIsFav(isFavourite(track))
  }, [track])

  const handleFav = (e) => {
    e.stopPropagation()
    toggleFavourite(track)
    setIsFav(!isFav)
  }

  return (
    <FavouriteButton onClick={handleFav}>
      {isFav ? '💚' : '🤍'}
    </FavouriteButton>
  )
}

export default Favourite