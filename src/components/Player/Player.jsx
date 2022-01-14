import { useEffect, useState } from 'react'
import { usePlayer } from '../../context/usePlayer'
import { millisToMinutesAndSeconds } from '../../helpers/helpers'
import { Favourite } from '../Favourite'
import { CurrentTrackInfo, PlayerContainer, ProgressBar, ProgressBarContainer, ProgressBarFill, TrackControls, TrackControlsContainer } from './styles'

const Player = () => {

  const player = usePlayer()
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(player.currentTime())

      // TODO: Limpiar cuando termine
      // if(!player.isPlaying && player.currentTime >= currentTime) {
      //   console.log("TERMINO, VOLVER A CERO TIEMPO Y BARRA")
      // }
    }, 200)

    return () => {
      clearInterval(interval)
    }
  }, [player, currentTime])

  useEffect(() => {
    return () => {
      player.stop()
    }
    // TODO: Está bien el enfoque? Cómo podría evitar el warning de la dependencia []
  }, [])

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
        <Favourite track={player.current} />
      </CurrentTrackInfo>
      <TrackControlsContainer>
        <TrackControls>
          <span onClick={handlePlay}>{player.isPlaying ? '⏸' : '▶'}</span>
          <span onClick={handleLoop}>🔁{player.isLoop ? '◽' : '◾'}</span>
        </TrackControls>
        <ProgressBarContainer>
          <span>{millisToMinutesAndSeconds(currentTime * 1000)}</span>
          <ProgressBar>
            <ProgressBarFill percent={currentTime / player.duration * 100} />
          </ProgressBar>
          <span>{millisToMinutesAndSeconds(player.duration * 1000)}</span>
        </ProgressBarContainer>
      </TrackControlsContainer>
      <div></div>
    </PlayerContainer>
  )
}

export default Player