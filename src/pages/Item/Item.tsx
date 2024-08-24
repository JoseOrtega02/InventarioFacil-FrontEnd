import { useParams } from "react-router-dom"
import AddItem from "./component/AddItem"
import { useEffect, useState } from "react"
import { getItems } from "./utils/itemUtils"
import ItemComponent from "./component/ItemComponent"

export interface Table {
  tableId: string,
  tableName: string,
  items: {
    name: string,
    stock: number,
    price: number,
    itemId: string
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
      {table?.items.map((item) => {
        return <ItemComponent data={{ ...item, tableId: id || "" }} />
      })}
      <AddItem />
    </>
  )
}

export default Item
