import { useContext } from "react"
import Loading from "./components/Loading"
import { AuthContext } from "./context/AuthContext"
import Router from "./router/Router"

function App() {
  const state = useContext(AuthContext)
  return state.isLogging
    ? <Loading />
    : <Router />
}

export default App
