import { useState } from 'react'
import { usePlayer } from '../../context/usePlayer'
import { CurrentTrackInfo, PlayerContainer, ProgressBar, ProgressBarContainer, ProgressBarFill, TrackControls, TrackControlsContainer } from './styles'

const Player = () => {

  const player = usePlayer()
  const [duration, setDuration] = useState(null)
  const [contador, setContador] = useState(0)

  if (!player.current) return <></>

  return (
    <PlayerContainer>
      <CurrentTrackInfo>
        <img src={player.current.album?.images[1]?.url} alt="album-cover" />
        <div>
          <span>{player.current.name}</span>
          <span>{player.current.artists.map(a => a.name).join(", ")}</span>
        </div>
        <span>❤</span>
      </CurrentTrackInfo>
      <TrackControlsContainer>
        <TrackControls>
          <span onClick={() => { console.log("play/pause"); player.togglePlay() }}>{player.isPlaying ? '⏸' : '▶'}</span>
          <span onClick={() => { console.log("repeat"); player.toggleLoop() }}>🔁</span>
          <span>{player.isLoop ? '◽' : '◾'}</span>
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