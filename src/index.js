import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter } from "react-router-dom"
import './index.css'

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
)
