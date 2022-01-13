import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

// TODO: Me parece un enfoque espantoso tener que crear un componente para poder usar el logout del hook
export const Logout = () => {
  const { logout } = useContext(AuthContext)

  logout()

  return null
}