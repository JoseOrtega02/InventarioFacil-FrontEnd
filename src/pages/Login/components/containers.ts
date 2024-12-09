import { styled } from "@/styled-system/jsx";

export const Container = styled.div`
display:flex;
flex-direction:row;
gap:10px;
padding: 55px 24px;
@media (max-width:768px){
padding: 24px 12px;
}
`
export const StyleContainerForm = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-content:center;
background-color: token(colors.color3);
width: 100%;
border-radius:24px;
padding: 24px 85px;
gap: 65px;
@media (max-width:768px){
padding:18px 36px;
gap: 36px;
}
`
export const Input = styled.div`
display:flex;
flex-direction: column;
`
