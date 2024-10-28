import { logOutFetch } from "../../pages/Login/utils/loginUtils"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Menubar } from 'primereact/menubar';
import { Label } from "@radix-ui/react-dropdown-menu";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
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
  const end = (
    <div className="flex align-items-center gap-2">
      <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
    </div>
  );
  return (<div className="card">

    <Menubar model={items} start={start} end={end} />
  </div>
  )
}
