import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../components/Loading"
import { AuthContext } from "../context/AuthContext"

export const CallbackLogin = () => {

  const { setToken, isLogged } = useContext(AuthContext)
  const location = useLocation()

  console.log("isLogged", isLogged)
  
  // TODO: Es un re workaround para que no se dispare infinitamente, si no me parece que el setToken se actualiza antes del return null y entra siempre acá
  if(isLogged) {
    return <Navigate replace to="/" />
  }

  const access_token = location.hash.substr(1).split('&')
    .reduce((initial, hash) => {
      const [key, value] = hash.split('=')
      initial[key] = decodeURIComponent(value)
      return initial
    }, {})
  if (access_token.access_token) {
    setToken(access_token)
    // TODO: Algo debería retornar aunque no sea un componente porque me tira un error por consola
    return <Loading />
  } else {
    return <Navigate replace to="/login" />
  }

}