import { styled } from "@/styled-system/jsx"

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items: center;
padding: 24px 20%;
height:80vh;
@media(max-width:768px){
padding:24px 12px;
}
`
export const TableButton = styled.button`
padding: 18px 48px;
border-radius: 24px;
border: 2px solid token(colors.color2);
&:hover{
cursor:pointer;
background-color: #7A746E;
background-opacity:20%;
color:white;
}
`
export const DeleteButton = styled.button`
background-color: #B3261E;
border-radius:24px;
color:white;
padding: 5px 15px;
&:hover{
cursor:pointer;
background-opacity:20%;
color:white;
}
@media (max-width:768px){
padding: 14px 18px;
}
`
export const EditButton = styled.button`
background-color: token(colors.color2);
border-radius:24px;
color:white;
padding: 5px 15px;
&:hover{
cursor:pointer;
background-opacity:20%;
color:white;
}
@media (max-width:768px){
padding: 14px 18px;

}


`
export const TableItemContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
width:100%;
padding:12px 12px;
`
export const ButtonsContainer = styled.div`

display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
gap: 10px;
`
