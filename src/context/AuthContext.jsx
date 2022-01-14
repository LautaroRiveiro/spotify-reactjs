import { createContext, useState } from "react"
import spotifyApi from "../services/services"

export const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [favs, setFavs] = useState([])
  const [isLogging, setIsLogging] = useState(false)
  const access_token = JSON.parse(localStorage.getItem("access_token"))



  const login = (token) => {
    // TODO: Si ya estaba podría evitar escribirlo, aunque no sé cómo evitar leerlo
    localStorage.setItem('access_token', JSON.stringify(token))

    spotifyApi.setAccessToken(token.access_token)
    setIsLogging(true)
    spotifyApi.getUser()
      .then((data) => {
        setUser(data)
        setFavs(getFavourites())
      })
      .catch(e => {
        console.log(e.status)
        if (e.status === 401) {
          localStorage.removeItem("access_token")
        }
      })
      .finally(() => {
        setIsLogging(false)
      })
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    setUser(null)
  }

  if (access_token && !user && !isLogging) {
    login(access_token)
  }

  const toggleFavourite = (track) => {
    // TODO: Refactor
    let isFav = -1
    let newFavs = []
    favs.forEach((item, index) => {
      if (item.id === track.id) {
        isFav = index
      }
    })
    if (isFav >= 0) {
      newFavs = favs.filter((f) => f.id !== track.id)
    } else {
      newFavs = favs.concat(track)
    }
    setFavs(newFavs)
    localStorage.setItem('favourites', JSON.stringify(newFavs))
  }

  const isFavourite = (track) => {
    // TODO: Refactor
    if (!track?.id) return false
    let isFav = false
    favs.forEach(item => {
      if (item.id === track.id) {
        isFav = true
      }
    })
    return isFav
  }

  const getFavourites = () => {
    return JSON.parse(localStorage.getItem("favourites")) || []
  }

  const contextValue = {
    user,
    isLogged: !!user,
    isLogging,
    login,
    logout,
    toggleFavourite,
    isFavourite,
    favs
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}