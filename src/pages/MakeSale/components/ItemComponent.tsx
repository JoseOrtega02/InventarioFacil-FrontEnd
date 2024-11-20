import { styled } from '@/styled-system/jsx'
import svg from "@/public/options-vertical-svgrepo-com.svg"
interface props {
  item: {
    name: string,
    price: number,
    quantity: number,
    itemId: string,
    tableId: string
  }
}

const ItemContainer= styled.div`
display:flex;
align-items:center;
flex-direction:row;
gap:32px;
border: 2px solid token(colors.color2);
border-radius: 24px;
padding: 12px 24px;
`

const OptionsButton= styled.button`
background-color: token(colors.color2);
padding: 8px 10px;
border-radius:24px;
`
const Icon = styled.img`
width:18px;
height: 20px;
`
function ItemComponent({ item }: props) {
  return (
    <ItemContainer>
      <h4>{item.name}</h4>
      <h4>Units: {item.quantity}</h4>
      <h4>$ {item.price}</h4>
      <OptionsButton><Icon src={svg}/></OptionsButton>
    </ItemContainer>
  )
}

export default ItemComponent
