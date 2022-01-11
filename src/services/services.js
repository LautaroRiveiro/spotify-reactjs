import SpotifyWebApi from '../plugins/spotify-web-api'

// TODO: Tiene sentido esto? Quiero poder acceder al SpotifyWebApi inicializado
const spotifyApi = new SpotifyWebApi()

export const getMyPlaylist = () => {
  return fetch('https://api.spotify.com/v1/me/playlists', {
    headers: new Headers({
      'Authorization': 'Bearer ' + spotifyApi.getAccessToken(),
      'Content-Type': 'application/json'
    })
  })
  .then((data)=>data.json())
}






export default spotifyApi