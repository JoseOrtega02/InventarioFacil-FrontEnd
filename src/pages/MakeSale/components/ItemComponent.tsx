import { styled } from '@/styled-system/jsx'
import { DeleteButton } from '../../Table/StyledComponents/Components'
import { useSaleStore } from '../../zustand/itemsSalesState'
import DeleteIcon from '@/src/components/styledComponents/DeleteIcon'
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
justify-content:space-around;
flex-direction:row;
gap:32px;
border: 2px solid token(colors.color2);
border-radius: 24px;
width:100%;
padding: 8px 24px;
font-size:24px;
`



function ItemComponent({ item }: props) {
const deleteItem= useSaleStore(state => state.deleteItem)
  return (
    <ItemContainer>
      <h4>{item.name}</h4>
      <h4>Units: {item.quantity}</h4>
      <h4>$ {item.price * item.quantity}</h4>
      <DeleteButton onClick={()=>deleteItem(item.itemId)} ><DeleteIcon/></DeleteButton>
    </ItemContainer>
  )
}

export default ItemComponent
