import { Button } from 'primereact/button';
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { PrimeReactProvider } from 'primereact/api';
function App() {


  return (


    <>
      <Navbar />
      <Outlet />
      <Footer />
      <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" />
      </div>
    </>

  )
}

export default App
