import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { css } from "@/styled-system/css"
const Background = css` background-color: token(colors.color1); `
function App() {
  const location = useLocation()
  if (location.pathname === "/") {
    return <Navigate to="/home" />
  }
  return (
    <div className={Background}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>

  )
}

export default App
