import Buttons from "./coponents/Buttons";
import { NavbarContainer } from "./coponents/containers";
import Navlinks from "./coponents/Navlinks";

export default function Navbar() {


  return (<NavbarContainer>
    <Navlinks />
    <Buttons />
  </NavbarContainer>
  )
}
