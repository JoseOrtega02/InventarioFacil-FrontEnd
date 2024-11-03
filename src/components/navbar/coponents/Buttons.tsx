import { styled } from "@/styled-system/jsx"
import { useNavigate } from "react-router-dom";
const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
gap:12px;
`
const SecondaryButton = styled.button`
padding: 14px 35px;
line-height: 12px;
height: min-content;
background-color: token(colors.color1) ;
border-radius:24px;
color: black;
&:hover{cursor:pointer;}
`
const PrimaryButton = styled.button`
padding: 14px 35px;
line-height: 12px;
height: min-content;
background-color: token(colors.color4) ;
border-radius:24px;
&:hover{cursor:pointer;}
`
function Buttons() {
  const navigate = useNavigate();
  return (
    <Container>
      <SecondaryButton onClick={() => navigate("/login")}>Log in</SecondaryButton>
      <PrimaryButton onClick={() => navigate("/register")}>Register</PrimaryButton>
    </Container>
  )
}

export default Buttons
