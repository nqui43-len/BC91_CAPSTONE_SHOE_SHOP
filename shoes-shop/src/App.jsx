import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      {/* Khi người dùng vào link gốc "/", màn hình sẽ hiện component Home */}
      <Route path="/" element={<Home />} />
      
      {/* Khi người dùng vào link "/login", màn hình sẽ hiện component Login */}
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App