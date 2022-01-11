import { Route, Routes } from "react-router-dom"
import { ApplicationPage } from "../pages/ApplicationPage"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { SearchPage } from "../pages/SearchPage"
import { CollectionPage } from "../pages/CollectionPage"
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage"
import CallbackLogin from "../services/CallbackLogin"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><ApplicationPage /></PrivateRoute>}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="playlist/:id" element={<PlaylistPage />} />
      </Route>
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/callback" element={<CallbackLogin />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router