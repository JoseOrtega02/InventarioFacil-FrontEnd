import { styled } from "@/styled-system/jsx"
import { useNavigate } from "react-router-dom";
import { SecondaryButton, PrimaryButton } from "../../styledComponents/Buttons";
import LogInIcon from "../../styledComponents/LogInIcon";
import RegisterIcon from "../../styledComponents/RegisterIcon";
import { ResponsiveText } from "../../styledComponents/Texts";
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
      <SecondaryButton onClick={() => navigate("/login")}><ResponsiveText>Log in</ResponsiveText> <LogInIcon/></SecondaryButton>
      <PrimaryButton onClick={() => navigate("/register")}><ResponsiveText>Register</ResponsiveText> <RegisterIcon/></PrimaryButton>
    </Container>
  )
}

export default Buttons
