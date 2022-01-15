import { Button, Logo, NotFoundPageContainer, Title } from './styles'

const NotFoundPage = () => {

  return (
    <NotFoundPageContainer>
      <Logo src="./assets/icons/Spotify_Icon_RGB_Green.png" alt="logo" />
      <Title>Página no encontrada</Title>
      <p>No encontramos la página que buscas.</p>
      <Button to="/" replace>Inicio</Button>
    </NotFoundPageContainer>
  )
}

export default NotFoundPage