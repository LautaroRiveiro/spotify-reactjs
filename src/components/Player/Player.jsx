import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { usePlayer } from '../../context/usePlayer'
import { millisToMinutesAndSeconds } from '../../helpers/helpers'
import { CurrentTrackInfo, PlayerContainer, ProgressBar, ProgressBarContainer, ProgressBarFill, TrackControls, TrackControlsContainer } from './styles'

const Player = () => {

  const player = usePlayer()
  const [contador, setContador] = useState(0)

  useEffect(() => {
    let interval = null
    const currentTime = player.currentTime()

    if (player.isPlaying && currentTime <= player.duration) {
      interval = setInterval(() => {
        setContador(currentTime)
      }, 200)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [player, contador])

  if (!player.current) return <></>

  const handlePlay = () => {
    player.togglePlay()
  }

  const handleLoop = () => {
    player.toggleLoop()
  }

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
          <span onClick={handlePlay}>{player.isPlaying ? '⏸' : '▶'}</span>
          <span onClick={handleLoop}>🔁{player.isLoop ? '◽' : '◾'}</span>
        </TrackControls>
        <ProgressBarContainer>
          <span>{millisToMinutesAndSeconds(contador * 1000)}</span>
          <ProgressBar>
            <ProgressBarFill percent={contador / player.duration * 100} />
          </ProgressBar>
          <span>{millisToMinutesAndSeconds(player.duration * 1000)}</span>
        </ProgressBarContainer>
      </TrackControlsContainer>
      <div></div>
    </PlayerContainer>
  )
}

export default Player