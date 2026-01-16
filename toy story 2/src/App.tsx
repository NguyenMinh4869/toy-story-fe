import React from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import LoginPage from './pages/LoginPage'
import { ROUTES } from './routes/routePaths'

const App: React.FC = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === ROUTES.LOGIN

  // If it's login page, render it separately without layout
  if (isLoginPage) {
    return <LoginPage />
  }

  return (
    <div className="app">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
