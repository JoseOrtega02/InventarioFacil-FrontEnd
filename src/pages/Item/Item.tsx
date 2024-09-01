import { useParams } from "react-router-dom"
import AddItem from "./component/AddItem"
import { useEffect, useState } from "react"
import { getItems } from "./utils/itemUtils"
import ItemComponent from "./component/ItemComponent"
import { itemAdapter } from "../../utils/Adapters/ItemAdapters"
import { Table } from "./Interfaces/Table"
import { useSaleStore } from "../zustand/itemsSalesState"


function Item() {
  const { id } = useParams()
  const [table, setTable] = useState<Table>({
    tableId: "",
    tableName: "",
    items: []
  })
  useEffect(() => {
    getItems(id, setTable)
  }, [])
  const sales = useSaleStore(state => state.items)
  return (
    <>
      <h1>{table?.tableName}</h1>
      <h2>Id:{id}</h2>
      <h2>table</h2>
      {table?.items.map((itemRaw) => {
        const item = itemAdapter(itemRaw)
        return <ItemComponent data={{ ...item, tableId: id || "" }} />
      })}
      <h2>Sales items:</h2>
      {sales?.map(item => <h1>{item.itemId}</h1>)}
      <AddItem />
    </>
  )
}

export default Item
