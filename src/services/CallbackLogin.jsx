import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { Loading } from "../components/Loading"
import { AuthContext } from "../context/AuthContext"

export const CallbackLogin = () => {

  const { login, isLogged } = useContext(AuthContext)
  const location = useLocation()

  // TODO: Es un re workaround para que no se dispare infinitamente, si no me parece que el login se actualiza antes del return null y entra siempre acá
  if (isLogged) {
    return <Navigate replace to="/" />
  }

  const access_token = location.hash.substr(1).split('&')
    .reduce((initial, hash) => {
      const [key, value] = hash.split('=')
      initial[key] = decodeURIComponent(value)
      return initial
    }, {})

  if (access_token.access_token) {
    login(access_token)
    // TODO: FIXME: Algo debería retornar aunque no sea un componente porque me tira un error por consola
    return <Loading />
  } else {
    return <Navigate replace to="/login" />
  }
}