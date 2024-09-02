import { ItemInterface, useSaleStore } from '../zustand/itemsSalesState'
import { postSale } from '../Sales/Utils/SalesUtils'

function MakeSale() {
  const items = useSaleStore(state => state.items)
  function returnPayloadSale(items: ItemInterface[]) {
    return { saleItems: items }
  }
  return (
    <div>
      {items?.map((item) => <h2>{item.itemId} - {item.quantity}</h2>)}
      <button onClick={() => {
        const payload = returnPayloadSale(items)
        postSale(payload)
      }}>Make the sale</button>
    </div>
  )
}

export default MakeSale
