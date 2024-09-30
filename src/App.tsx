import { Button } from "@/components/ui/button"

import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { ThemeProvider } from "@/components/theme-provider"

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">


      <>
        <Navbar />
        <Outlet />
        <Footer />
        <Button >Button</Button>

      </>

    </ThemeProvider>
  )
}

export default App
