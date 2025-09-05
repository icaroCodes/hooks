import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Form from './pages/form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group px-4 py-2 rounded-lg hover:bg-white/20"
          >
            Contador
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-4/5"></span>
          </Link>
          <Link 
            to="/formulario" 
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group px-4 py-2 rounded-lg hover:bg-white/20"
          >
            Formulário
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-4/5"></span>
          </Link>
        </div>
      </nav>

      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/formulario' element={<Form/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
)