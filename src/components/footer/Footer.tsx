import { styled } from "@/styled-system/jsx"
const FooterContainer = styled.footer`
display:flex;
justify-content: start;
padding:24px;
height: 90px;
background-color: token(colors.color2);
align-items:center;
color: token(colors.color1);
`
function Footer() {
  return (
    <FooterContainer>
      <h4>Created by: <a href="https://www.linkedin.com/in/jose-manuel-ortega-gordillo" rel='noopener noreferrer' target="_blank" style={{ textDecoration: "underline" }}>Jose Ortega</a></h4>
    </FooterContainer>
  )
}

export default Footer
