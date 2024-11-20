import { ItemInterface, useSaleStore } from '../zustand/itemsSalesState'
import { postSale } from '../Sales/Utils/SalesUtils'
import ItemComponent from './components/ItemComponent'
import { styled } from '@/styled-system/jsx'
import { TitleBlack } from '@/src/components/styledComponents/Texts'
import { PrimaryButton } from '@/src/components/styledComponents/Buttons'
const ContainerKart = styled.div`
display:flex;
flex-direction:column;
gap:12px;
align-items:center;
margin-left:auto;
margin-right:auto;
width:60%;
justify-content:center;
margin-top:24px;
`
function MakeSale() {
  const items = useSaleStore(state => state.items)
  const fakeItems = [
    {
      name: "random",
      price: 2,
      quantity: 3,
      tableId: "aaaaaa",
      itemId: "aaaaaaaaa"
    }
  ]
  function returnPayloadSale(items: ItemInterface[]) {
    return { saleItems: items }
  }

  return (<>
   <ContainerKart>
       <TitleBlack>Your kart</TitleBlack>
      {fakeItems?.map((item) => <ItemComponent item={item} />)}
      <PrimaryButton  onClick={() => {
        //const payload = returnPayloadSale(items)
        ////////////////postSale(payload)
        alert("sale succesfull")
      }}>Make the sale</PrimaryButton>
    </ContainerKart>
  </>
   
  )
}

export default MakeSale
