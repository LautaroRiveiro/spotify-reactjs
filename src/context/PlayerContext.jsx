import { createContext, useState } from "react"

const PlayerContext = createContext(null)

export const PlayerContextProvider = ({ children }) => {

  const [track, setTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoop, setIsLoop] = useState(false)
  const [duration, setDuration] = useState(0)

  const context = {
    track,
    setTrack,
    isPlaying,
    setIsPlaying,
    isLoop,
    setIsLoop,
    duration,
    setDuration
  }

  return (
    <PlayerContext.Provider value={context}>
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContext