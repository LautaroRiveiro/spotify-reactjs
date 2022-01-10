import { createContext, useState } from "react"
import { initApi } from "../services/services"

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{

  let _user = null
  const access_token = JSON.parse(localStorage.getItem("access_token"))
  if(access_token) {
    initApi(access_token.access_token)
    // TODO: Traer al usuario
    _user = access_token
  }

  const [ user, setUser ] = useState(_user)

  const contextValue = {
    user,
    setUser,
    isLogged: !!user
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}