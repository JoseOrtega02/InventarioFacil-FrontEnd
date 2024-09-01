import { deleteItems, updateItems } from "../utils/itemUtils"
import { Props } from "../Interfaces/Props"
import { useSaleStore } from "../../zustand/itemsSalesState"

function ItemComponent({ data }: Props) {
  const addItem = useSaleStore(state => state.addItem)
  return (
    <>
      <h3>{data.name}</h3>
      <h3>{data.stock}</h3>
      <h3>{data.price}</h3>
      <button onClick={async () => {
        const newItem = {
          name: data.name + "modified",
          stock: data.stock - 1,
          price: data.price,
        }
        await updateItems({ tableId: data.tableId, itemId: data.itemId, newItem })
      }}>Update</button>
      <button onClick={async () => {
        await deleteItems({ tableId: data.tableId, itemId: data.itemId })
      }}>Delete</button>
      <button onClick={() => {
        const saleBody = {
          tableId: data.tableId,
          quantity: 1,
          itemId: data.itemId
        }
        addItem(saleBody)
      }}>Add to the sale </button>
    </>
  )
}

export default ItemComponent
