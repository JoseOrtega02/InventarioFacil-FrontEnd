import { useParams } from "react-router-dom"
import AddItem from "./component/AddItem"
import { useEffect, useState } from "react"
import { getItems } from "./utils/itemUtils"
import ItemComponent from "./component/ItemComponent"
import { itemAdapter } from "../../utils/Adapters/ItemAdapters"

export interface Table {
  tableId: string,
  tableName: string,
  items: {
    name: string,
    stock: number,
    price: number,
    _id: string
    __v: number
  }[]
}

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
  return (
    <>
      <h1>{table?.tableName}</h1>
      <h2>Id:{id}</h2>
      <h2>table</h2>
      {table?.items.map((itemRaw) => {
        const item = itemAdapter(itemRaw)
        return <ItemComponent data={{ ...item, tableId: id || "" }} />
      })}
      <AddItem />
    </>
  )
}

export default Item
