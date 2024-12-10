import { styled } from "@/styled-system/jsx";

export const Title = styled.h1`
font-size:42px;
max-width:500px;
font-family: 'Krona One', sans-serif;
@media(max-width:768px){
font-size:32px;
}
`
export const TitleBlack = styled.h1`
font-size: 34px;
color: token(colors.color2);
font-family: "krona one", sans-serif;
justify-content: center;
text-align:center;
margin:12px 0px;
`
export const ResponsiveText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;