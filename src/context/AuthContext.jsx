import { createContext, useState } from "react"

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{


  // TODO: Traer de localStorage
  console.log("Esto se ejecuta en el AuthContext")
  

  const [ user, setUser ] = useState(null)

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