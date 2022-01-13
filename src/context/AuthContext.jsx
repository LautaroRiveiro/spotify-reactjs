import { createContext, useState } from "react"
import spotifyApi from "../services/services"

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{

  const [ user, setUser ] = useState(null)
  const [ isLogging, setIsLogging ] = useState(false)
  const access_token = JSON.parse(localStorage.getItem("access_token"))



  const login = (token)=>{
    // TODO: Si ya estaba podría evitar escribirlo, aunque no sé cómo evitar leerlo
    localStorage.setItem('access_token', JSON.stringify(token))

    spotifyApi.setAccessToken(token.access_token)
    setIsLogging(true)
    spotifyApi.getUser()
    .then((data)=>{
      setUser(data)
    })
    .catch(e => {
      console.log(e.status)
      if (e.status === 401) {
        localStorage.removeItem("access_token")
      }
    })
    .finally(()=>{
      setIsLogging(false)
    })
  }

  const logout = ()=>{
    localStorage.removeItem("access_token")
    setUser(null)
  }

  if(access_token && !user && !isLogging) {
    login(access_token)
  }

  const contextValue = {
    user,
    isLogged: !!user,
    isLogging,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}