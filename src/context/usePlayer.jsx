import { useContext } from "react"
import PlayerContext from "./PlayerContext"

// TODO: Me hubiera gustado que el player se definiera dentro del hook, pero si no se renderizaba cada vez que un componente llamaba a usePlayer()
const audioElement = new Audio()

export const usePlayer = () => {

  const state = useContext(PlayerContext)

  const load = (track) => {
    state.setTrack(track)
    // TODO: Cuál es la diferencia con load?
    audioElement.src = track.preview_url
    audioElement.play()
  }

  audioElement.oncanplay = ()=>{
    state.setIsPlaying(true)
    state.setDuration(audioElement.duration)
  }

  audioElement.onended = ()=>{
    state.setIsPlaying(false)
  }

  const stop = ()=>{
    audioElement.src = ""
  }

  const togglePlay = () => {
    if (state.isPlaying) {
      state.setIsPlaying(false)
      audioElement.pause()
    } else {
      state.setIsPlaying(true)
      audioElement.play()
    }
  }

  const toggleLoop = () => {
    audioElement.loop = !audioElement.loop
    state.setIsLoop(!state.isLoop)
  }

  const getCurrentTime = ()=>{
    return audioElement.currentTime
  }

  return {
    current: state.track,
    load,
    togglePlay,
    toggleLoop,
    stop,
    isLoop: state.isLoop,
    isPlaying: state.isPlaying,
    duration: state.duration,
    currentTime: getCurrentTime
  }
}