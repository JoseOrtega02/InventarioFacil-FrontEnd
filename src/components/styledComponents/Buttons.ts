import { styled } from "@/styled-system/jsx"

export const SecondaryButton = styled.button`
padding: 14px 35px;
line-height: 12px;
height: min-content;
background-color: token(colors.color1) ;
border-radius:24px;
color: black;
&:hover{cursor:pointer;}
`
export const PrimaryButton = styled.button`
padding: 14px 35px;
line-height: 12px;
height: min-content;
background-color: token(colors.color4) ;
border-radius:24px;
color:white;
&:hover{cursor:pointer;}
`
