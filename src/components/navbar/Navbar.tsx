import { useState } from 'react'
import { Menubar } from 'primereact/menubar';
import UserComponent from "./userComponent";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: "/"
    },
    {
      label: 'Tables',
      icon: 'pi pi-box',
      url: "/dashboard/tables"
    },
    {
      label: "Sales",
      icon: "pi pi-receipt",
      url: "/sales"
    },
    {
      label: "Make a sale",
      icon: "pi pi-money-bill",
      url: "/make-sale"
    }
  ]
  const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
  return (<div className="card">

    <Menubar model={items} start={start} end={UserComponent} />
  </div>
  )
}
