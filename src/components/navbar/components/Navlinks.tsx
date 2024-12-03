import svg from "@/public/logo.svg"
import { LinksContainer } from "./containers"
import { styled } from "@/styled-system/jsx"
import { Link } from "react-router-dom"
import HomeIcon from "../../styledComponents/HomeIcon"
import BoxIcon from "../../styledComponents/BoxIcon"
import SalesIcon from "../../styledComponents/SalesIcon"
const Container = styled.div`
display: flex;
gap:65px;
align-items:center;
`
const NavLink = styled.button`
display:flex;
justify-content:center;
align-items:center;
font-family: 'PT Sans Narrow', sans-serif;
&:hover{cursor:pointer;
}
`
function Navlinks() {
  return (
    <Container >
      <img src={svg} />
      <LinksContainer>

        <Link to="/home">
          <NavLink><HomeIcon/> Home</NavLink>
        </Link>

        <Link to="/dashboard/tables">
          <NavLink><BoxIcon/> Inventory</NavLink>
        </Link>

        <Link to="/sales">
          <NavLink><SalesIcon/> Sales</NavLink>
        </Link>
      </LinksContainer>
    </Container>
  )
}

export default Navlinks
