import { createContext, useState } from "react"
import spotifyApi from "../services/services"

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{

  const [ user, setUser ] = useState(null)
  const [ isLogging, setIsLogging ] = useState(false)
  const access_token = JSON.parse(localStorage.getItem("access_token"))

  if(access_token && !user && !isLogging) {
    console.log("ENTRE")
    spotifyApi.setAccessToken(access_token.access_token)
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
      console.log("finally")
      setIsLogging(false)
    })
  }

  const setToken = (token)=>{
    // TODO: Refactorizar
    localStorage.setItem('access_token', JSON.stringify(token))
    spotifyApi.setAccessToken(token.access_token)
    spotifyApi.getUser()
    .then((data)=>{
      setUser(data)
    })
    // TODO: Qué pasa si mando un token a mano? Debería tener un catch como arriba
  }

  const contextValue = {
    user,
    isLogged: !!user,
    isLogging,
    setToken
  }

  console.log("AUTH CONTEXT", contextValue)

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}