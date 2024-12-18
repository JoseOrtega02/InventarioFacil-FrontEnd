import { styled } from "@/styled-system/jsx"

export const Image = styled.img`
border-radius: 24px;

@media (max-width:768px){
display:none;
}
`
export const Title = styled.div`
font-family: 'Krona One', Arial, sans-serif;
font-size: 36px;
color:white;
`
export const TextInput = styled.input`
background-color: token(colors.color1);
padding: 12px 8px;
font-size:18px;
color: token(colors.color2);
font-family: 'PT Sans Narrow', sans-serif;
border-radius: 24px;
`
export const LabelInput = styled.label`
color:white;
font-family: 'PT Sans Narrow', sans-serif;
font-size: 24px;
`
export const ErrorMessageStyled = styled.h4`
color:red;
font-family: 'Sarala', sans-serif;
font-size:14px;
`
