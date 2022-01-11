import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const CallbackLogin = () => {

  const { setUser } = useContext(AuthContext)

  // TODO: Usar algun Location de react-router-dom en vez de window
  const access_token = window.location.hash.substr(1).split('&')
    .reduce((initial, hash) => {
      const [key, value] = hash.split('=')
      initial[key] = decodeURIComponent(value)
      return initial
    }, {})
  if (access_token.access_token) {
    // TODO: Qué pasa si mando un token a mano?
    // TODO: Refactorizar esta línea al AuthContext?
    localStorage.setItem('access_token', JSON.stringify(access_token))
    // FIXME: Cómo manejar la relación token/user?
    // TODO: Reemplazar por un Usuario. Por ahora es un TOKEN
    setUser(access_token)
    return <Navigate replace to="/" />
  } else {
    // TODO: Puede que haya fallado entonces manejar algún error
    return <Navigate replace to="/login" />
  }
  
}

export default CallbackLogin