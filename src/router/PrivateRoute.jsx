import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const PrivateRoute = ({ element }) => {

  const location = useLocation()
  const { isLogged } = useContext(AuthContext)

  return isLogged ? element : <Navigate to="/login" state={{ from: location }} />
}