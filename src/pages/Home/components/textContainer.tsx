import { styled } from "@/styled-system/jsx"
import { useNavigate } from "react-router-dom"
const ContainerText = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
padding-top:32px;
padding-bottom:32px;
gap: 100px;
`
const Title = styled.h1`
font-size:42px;
max-width:500px;
font-family: 'Krona One', sans-serif;
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
function TextContainer() {
  const navigate = useNavigate()
  return (
    <ContainerText>
      <Title>Mantene tu stock siempre en orden y potencia tu negocio</Title>
      <Button onClick={() => navigate("/dashboard/tables")}>Start</Button>
    </ContainerText>
  )
}

export default TextContainer
