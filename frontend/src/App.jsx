
import { Route, Routes } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function App() {
 
//am back
  return (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/signup' element={<SignUpPage/>} />
    <Route path='login' element={<LoginPage />} />
  </Routes>
  )
}

export default App
