import { generateRandomString } from '../../helpers/helpers'
import { LoginButton, LoginContainer } from './styles'

const LoginPage = () => {

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
  const LOGIN_SCOPE = 'user-read-private user-read-email'
  const LOGIN_REDIRECT_URI = process.env.REACT_APP_LOGIN_REDIRECT_URI
  const LOGIN_STATE = generateRandomString(16)
  const LOGIN_URL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&state=${LOGIN_STATE}&scope=${LOGIN_SCOPE}&redirect_uri=${LOGIN_REDIRECT_URI}`

  return (
    <LoginContainer>
      <img src="/assets/logos/Spotify_Logo_RGB_Green.png" alt="logo" />
      <LoginButton href={LOGIN_URL}> Ingresar con Spotify </LoginButton>
    </LoginContainer>
  )
}

export default LoginPage