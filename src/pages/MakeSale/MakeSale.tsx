import { ItemInterface, useSaleStore } from '../zustand/itemsSalesState'
import { postSale } from '../Sales/Utils/SalesUtils'
import ItemComponent from './components/ItemComponent'
import { styled } from '@/styled-system/jsx'
import { Title, TitleBlack } from '@/src/components/styledComponents/Texts'
import { PrimaryButton } from '@/src/components/styledComponents/Buttons'
import { useEffect, useState } from 'react'
const ContainerKart = styled.div`
display:flex;
flex-direction:column;
gap:32px;
align-items:center;
margin-left:auto;
margin-right:auto;
width:80%;
height: 60vh;
justify-content:center;
margin-top:24px;
margin-bottom:24px;
`
const TotalContainer= styled.div`
width:100%;
margin-top:14px;
padding: 18px 32px;
display:flex;
justify-content:space-between;
border-radius:24px;
background-color:token(colors.color2);
color:white;
`
const TotalText = styled.h4`
font-size: 36px;
font-family: 'PT Sans Narrow', sans-serif;
color:white;
`
const MakeSaleButton= styled.button`
margin-top:24px;
padding: 18px 28px;
line-height: 12px;
width:100%;
font-family:'PT Sans Narrow', sans-serif;
font-size:22px;
background-color: token(colors.color4) ;
border-radius:24px;
color:white;
&:hover{cursor:pointer;}
`
function MakeSale() {
  const items = useSaleStore(state => state.items)
  const [total,setTotal] = useState<number>(0)
  console.log(items)
  useEffect(()=>{
    const calculateTotal= ()=>{
      let total=0
    items.map((item)=>{
      total+=item.price*item.quantity
    })
    setTotal(total)
  }
    calculateTotal()
  },[items])
  
  function returnPayloadSale(items: ItemInterface[]) {
    return { saleItems: items }
  }

  return (
   <ContainerKart>
       <TitleBlack>Your kart</TitleBlack>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:"12px"}}>
      {items?.map((item) => <ItemComponent item={item} />)}
      <TotalContainer>
        <TotalText>Total:</TotalText>
<TotalText>${total}</TotalText>
      </TotalContainer>
      <MakeSaleButton  onClick={async () => {
        const payload = returnPayloadSale(items)
       await postSale(payload)
        console.log(items)
        alert("sale successful")
      }}>Make the sale</MakeSaleButton>
      </div>
      
    </ContainerKart>
  
   
  )
}

export default MakeSale
