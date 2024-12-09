import { styled } from "@/styled-system/jsx";
export const MainContainer = styled.div`
height:80vh;
padding: 24px 55px;
display:flex;
flex-direction:row;
justify-content:center;
gap:60px;

@media (max-width: 768px){
flex-direction:column;
height:auto;
padding:16px 5px;
gap: 12px;
}

`
