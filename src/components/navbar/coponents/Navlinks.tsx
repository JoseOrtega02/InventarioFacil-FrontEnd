import svg from "@/public/logo.svg"
import { LinksContainer } from "./containers"
import { styled } from "@/styled-system/jsx"
import { Link } from "react-router-dom"
const Container = styled.div`
display: flex;
gap:65px;
align-items:center;
`
const NavLink = styled.button`
font-family: 'PT Sans Narrow', sans-serif;
&:hover{cursor:pointer;
}
`
function Navlinks() {
  return (
    <Container >
      <img src={svg} />
      <LinksContainer>

        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>

        <Link to="/dashboard/tables">
          <NavLink>Tables</NavLink>
        </Link>

        <Link to="/sales">
          <NavLink>Sales</NavLink>
        </Link>
      </LinksContainer>
    </Container>
  )
}

export default Navlinks
