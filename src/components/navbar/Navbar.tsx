import { ModeToggle } from "@/components/mode-toggle"
import { logOutFetch } from "../../pages/Login/utils/loginUtils"


function Navbar() {
  return (
    <nav>
      <img src="#" alt="logo" />
      <button type="button">Hamburger</button>
      <button onClick={() => { logOutFetch() }}>LogOut</button>
      <ModeToggle />
    </nav>
  )
}

export default Navbar
