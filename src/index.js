import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import { PlayerContextProvider } from './context/PlayerContext'

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASENAME}>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
)
