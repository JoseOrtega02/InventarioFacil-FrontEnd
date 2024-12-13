import { ItemInterface, useSaleStore } from '../zustand/itemsSalesState'
import { postSale } from '../Sales/Utils/SalesUtils'
import ItemComponent from './components/ItemComponent'
import { styled } from '@/styled-system/jsx'
import {  TitleBlack } from '@/src/components/styledComponents/Texts'

import { useEffect, useState } from 'react'
import TicketIcon from '@/src/components/styledComponents/TicketIcon'
import { toast, ToastContainer } from 'react-toastify'
const ContainerKart = styled.div`
display:flex;
flex-direction:column;
gap:32px;
align-items:center;
margin-left:auto;
margin-right:auto;

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
display:flex;
align-items:center;
justify-content:center;
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
    <ToastContainer/>
       <TitleBlack>Your kart</TitleBlack>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:"12px"}}>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"100%",alignItems:"center",gap:"12px",overflowY:"scroll",maxHeight:"300px",paddingTop:"24px"}}>
          {items?.map((item) => <ItemComponent item={item} />)}
        </div>
      
      <TotalContainer>
        <TotalText>Total:</TotalText>
<TotalText>${total}</TotalText>
      </TotalContainer>
      <MakeSaleButton  onClick={async () => {
        const payload = returnPayloadSale(items)
console.log(payload)
       await toast.promise(postSale(payload), {
        pending: 'Loading...',
        success: 'Sale done successfully',
        error: 'Error making the Sale'
      })
      }}><TicketIcon/>Make the sale</MakeSaleButton>
      </div>
      
    </ContainerKart>
  
   
  )
}

export default MakeSale
