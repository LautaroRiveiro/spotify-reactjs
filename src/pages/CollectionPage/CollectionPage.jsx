import { useContext } from 'react'
import styled from 'styled-components'
import { Tracklist } from '../../components/Tracklist'
import { AuthContext } from '../../context/AuthContext'

const CollectionPageContainer = styled.div`
  color: var(--text-accent-color);
  height: 100%;
`
const CenteredContainer = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`

const CollectionPage = () => {

  const { favs } = useContext(AuthContext)

  if (favs.length === 0) return (
    <CollectionPageContainer>
      <CenteredContainer>
        <p>Guardá canciones como favoritas...</p>
      </CenteredContainer>
    </CollectionPageContainer>
  )

  return (
    <CollectionPageContainer>
      <h1>
        Colecciones
      </h1>
      <Tracklist tracks={favs.map(track => { return { track } })} reduced />
    </CollectionPageContainer>
  )
}

export default CollectionPage