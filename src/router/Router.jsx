import { Route, Routes } from "react-router-dom"
import { ApplicationPage } from "../pages/ApplicationPage"
import { CollectionPage } from "../pages/CollectionPage"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { PlaylistPage } from "../pages/PlaylistPage"
import { SearchPage } from "../pages/SearchPage"
import { CallbackLogin } from "../services/CallbackLogin"
import { Logout } from "../services/Logout"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<ApplicationPage />} />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="playlist/:id" element={<PlaylistPage />} />
      </Route>
      <Route path="/login" element={<PublicRoute element={<LoginPage />} />} />
      <Route path="/callback" element={<PublicRoute element={<CallbackLogin />} />} />
      <Route path="/logout" element={<PrivateRoute element={<Logout />} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router