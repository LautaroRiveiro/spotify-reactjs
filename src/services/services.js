import SpotifyWebApi from '../plugins/spotify-web-api'

const spotifyApi = new SpotifyWebApi()

export const initApi = (token)=>{
  spotifyApi.setAccessToken(token)
}

export const getArtistAlbums = ()=>{
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
      console.log('Artist albums', data);
    },
    function (err) {
      console.error(err);
    }
  );
}



//s.searchTracks()...