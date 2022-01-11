import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const PublicRoute = ({ children }) => {
  const location = useLocation()
  const { isLogged } = useContext(AuthContext)

  return isLogged ? <Navigate to={location.state?.from || "/"} /> : children
}