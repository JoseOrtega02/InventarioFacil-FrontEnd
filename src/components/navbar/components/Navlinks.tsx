import svg from "@/public/logo.svg"
import { styled } from "@/styled-system/jsx"
import { Link } from "react-router-dom"
import HomeIcon from "../../styledComponents/HomeIcon"
import BoxIcon from "../../styledComponents/BoxIcon"
import SalesIcon from "../../styledComponents/SalesIcon"
import { useState } from "react"
import HamburgerIcon from "../../styledComponents/HamburgerIcon"
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
`;

const Logo = styled.img`
  height: 52px;
  margin-right:12px;
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;

  @media (max-width: 768px) {
    display: none;
    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left:100px;
      background-color: token(colors.color2);
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  }
`;

const NavLink = styled.button`
  display: flex;
  align-items: center;
  font-family: 'PT Sans Narrow', sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

function Navlinks() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Logo src={svg} alt="Logo" />
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon/>
      </HamburgerButton>
      <LinksWrapper className={menuOpen ? "open" : ""}>
        <Link to="/home">
          <NavLink>
            <HomeIcon /> Home
          </NavLink>
        </Link>
        <Link to="/dashboard/tables">
          <NavLink>
            <BoxIcon /> Inventory
          </NavLink>
        </Link>
        <Link to="/sales">
          <NavLink>
            <SalesIcon /> Sales
          </NavLink>
        </Link>
      </LinksWrapper>
    </Container>
  );
}

export default Navlinks
