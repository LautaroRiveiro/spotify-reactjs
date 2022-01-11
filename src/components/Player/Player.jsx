import { useEffect, useState } from 'react'
import { usePlayer } from '../../context/usePlayer'
import spotifyApi from '../../services/services'
import { CurrentTrackInfo, PlayerContainer, ProgressBar, ProgressBarContainer, ProgressBarFill, TrackControls, TrackControlsContainer } from './styles'

const Player = () => {

  const player = usePlayer()
  const [duration, setDuration] = useState(null)
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log("USE EFFECT?")
    spotifyApi.getTrack('3nfICwo20uiFdEGzgNUSrG')
      .then((data) => {

        player.load(data)

        // audioElement.onloadedmetadata = () => {
        //   setDuration(Math.round(audioElement.duration))
        // };
        // audioElement.onplay = (e) => {
        //   setInterval(() => {
        //     setContador((prev) => prev + 1)
        //   }, 1000)
        // }
      })

  }, [])

  return (
    <PlayerContainer>
      <CurrentTrackInfo>
        <img src="https://mosaic.scdn.co/300/ab67616d0000b2734ce8b4e42588bf18182a1ad2ab67616d0000b273608a63ad5b18e99da94a3f73ab67616d0000b273dbeec63ad914c973e75c24dfab67616d0000b273e230f303815e82a86713eedd" alt="" />
        <div>
          <span>nombre</span>
          <span>artista</span>
        </div>
        <span>❤</span>
      </CurrentTrackInfo>
      <TrackControlsContainer>
        <TrackControls>
          <span onClick={()=>{console.log("play/pause");  player.togglePlay()}}>{player.isPlaying ? '⏸' : '▶'}</span>
          <span onClick={()=>{console.log("repeat");  player.toggleLoop()}}>🔁</span>
          <span>{ player.isLoop ? '◽' : '◾'}</span>
        </TrackControls>
        <ProgressBarContainer>
          <span>{contador}</span>
          <ProgressBar>
            <ProgressBarFill percent={contador / duration * 100} />
          </ProgressBar>
          <span>{duration}</span>
        </ProgressBarContainer>
      </TrackControlsContainer>
      <div></div>
    </PlayerContainer>
  )
}

export default Player