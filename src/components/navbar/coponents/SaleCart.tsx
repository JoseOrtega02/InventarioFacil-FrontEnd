import icon from "@/public/cash-register-svgrepo-com.svg"
import { styled } from "@/styled-system/jsx"
import { Link } from "react-router-dom"
const Icon = styled.img`
width: 34px;
`
const ButtonIcon = styled.button`
margin-top:auto;
margin-bottom:auto;
height: fit-content;
padding:8px;
border-radius:28px;
background-color: token(colors.color4);
&:hover{
cursor:pointer;}
`

function SaleCart() {
  return (
    <Link to="/make-sale" style={{ marginTop: "auto", marginBottom: "auto" }}> <ButtonIcon><Icon src={icon} /></ButtonIcon>
    </Link>)
}

export default SaleCart
