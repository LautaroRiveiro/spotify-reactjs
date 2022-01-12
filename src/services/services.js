import SpotifyWebApi from '../plugins/spotify-web-api'

// TODO: Tiene sentido esto? Quiero poder acceder al SpotifyWebApi inicializado
const _spotifyApi = new SpotifyWebApi()

// TODO: Workaround para manejar el access_token vencido. Tal vez se pueda actualizar el token sin eliminarlo.
const handlerError = (cb) => {
  return cb
    .catch(e => {
      console.log(e.status)
      if (e.status === 401) {
        localStorage.removeItem("access_token")
      }
    })
}

const setAccessToken = (access_token) => {
  _spotifyApi.setAccessToken(access_token)
}

const getArtistAlbums = (id) => {
  return handlerError(_spotifyApi.getArtistAlbums(id))
}

const getCategoryPlaylists = (category) => {
  return handlerError(_spotifyApi.getCategoryPlaylists(category))
}

const getAvailableGenreSeeds = () => {
  return handlerError(_spotifyApi.getAvailableGenreSeeds())
}

const getPlaylist = (id) => {
  return handlerError(_spotifyApi.getPlaylist(id))
}

const getMyPlaylists = () => {
  return handlerError(fetch('https://api.spotify.com/v1/me/playlists', {
    headers: new Headers({
      'Authorization': 'Bearer ' + _spotifyApi.getAccessToken(),
      'Content-Type': 'application/json'
    })
  })
    .then((data) => data.json()))
}

const spotifyApi = {
  setAccessToken,
  getArtistAlbums,
  getCategoryPlaylists,
  getAvailableGenreSeeds,
  getPlaylist,
  getMyPlaylists,
}

export default spotifyApi