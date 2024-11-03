import { styled } from "@/styled-system/jsx"
const ContainerText = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
gap: 40%;
`
const Title = styled.h1`
font-size:48px;
max-width:500px;
`
const Button = styled.button`

padding: 14px 35px;
height: min-content;
background-color: token(colors.color4) ;
border-radius:24px;
font-size:24px;
color:white;
&:hover{cursor:pointer;}
`
function TextContainer() {
  return (
    <ContainerText>
      <Title>Mantene tu stock siempre en orden y potencia tu negocio</Title>
      <Button>Start</Button>
    </ContainerText>
  )
}

export default TextContainer
