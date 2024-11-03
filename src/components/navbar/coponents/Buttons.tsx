import { styled } from "@/styled-system/jsx"
import { useNavigate } from "react-router-dom";
import { SecondaryButton, PrimaryButton } from "../../styledComponents/Buttons";
const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
gap:12px;
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
