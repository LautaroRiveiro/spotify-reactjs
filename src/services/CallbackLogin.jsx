import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import { AuthContext } from "../context/AuthContext"

export const CallbackLogin = () => {

  const { login } = useContext(AuthContext)
  const location = useLocation()

  const access_token = location.hash.substring(1).split('&')
    .reduce((initial, hash) => {
      const [key, value] = hash.split('=')
      initial[key] = decodeURIComponent(value)
      return initial
    }, {})

  useEffect(() => {
    if (access_token.access_token) {
      login(access_token)
    }
  })

  if (access_token.access_token) {
    return null
  } else {
    return <Navigate replace to="/login" />
  }
}