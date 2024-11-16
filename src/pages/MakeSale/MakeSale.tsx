import { ItemInterface, useSaleStore } from '../zustand/itemsSalesState'
import { postSale } from '../Sales/Utils/SalesUtils'
import ItemComponent from './components/ItemComponent'

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
  return (
    <div>
      {fakeItems?.map((item) => <ItemComponent item={item} />)}
      <button onClick={() => {
        //const payload = returnPayloadSale(items)
        ////////////////postSale(payload)
        alert("sale succesfull")
      }}>Make the sale</button>
    </div>
  )
}

export default MakeSale
