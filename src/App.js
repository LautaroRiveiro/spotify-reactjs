import { Routes, Route } from "react-router-dom"
import ApplicationPage from "./pages/ApplicationPage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import CallbackLogin from "./services/CallbackLogin"

// TODO: Crear páginas
const HomePage = ()=>{
  return <h1>INICIO</h1>
}
const SearchPage = ()=>{
  return <h1>BUSCAR</h1>
}
const CollectionPage = ()=>{
  return <h1>BIBLIOTECA</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ApplicationPage />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="collection" element={<CollectionPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<CallbackLogin />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
