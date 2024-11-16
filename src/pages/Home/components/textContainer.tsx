import { styled } from "@/styled-system/jsx"
import { useNavigate } from "react-router-dom"
import { Title } from "../../Login/components/inputComponents"
const ContainerText = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
padding-top:32px;
padding-bottom:32px;
gap: 100px;
color:black;
`
const Button = styled.button`
font-family: 'PT Sans Narrow', sans-serif;
padding: 14px 35px;
height: min-content;
background-color: token(colors.color4) ;
border-radius:24px;
font-size:24px;
color:white;
&:hover{cursor:pointer;}
`

export const TitleBlack = styled.div`
font-family: 'Krona One', sans-serif;
font-size: 36px;
color:black;
`
function TextContainer() {
  const navigate = useNavigate()
  return (
    <ContainerText>
      <TitleBlack>Mantene tu stock siempre en orden y potencia tu negocio</TitleBlack>
      <Button onClick={() => navigate("/dashboard/tables")}>Start</Button>
    </ContainerText>
  )
}

export default TextContainer
