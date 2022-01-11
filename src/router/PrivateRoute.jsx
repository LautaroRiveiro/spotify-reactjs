import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const PrivateRoute = ({ hasRole: role, children }) => {

  const location = useLocation()
  const { isLogged } = useContext(AuthContext)

  return isLogged ? children : <Navigate to="/login" state={{ from: location }} />
}