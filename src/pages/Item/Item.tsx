import { useParams } from "react-router-dom"
import AddItem from "./component/AddItem"
import { useEffect, useState } from "react"
import { getItems } from "./utils/itemUtils"
import ItemComponent from "./component/ItemComponent"
import { itemAdapter } from "../../utils/Adapters/ItemAdapters"
import { Table } from "./Interfaces/Table"
import { useSaleStore } from "../zustand/itemsSalesState"
import { TitleBlack } from "@/src/components/styledComponents/Texts"
import TableComponent from "./component/TableComponent"


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
      <TitleBlack>{table?.tableName}</TitleBlack>
      <h2>Id:{id}</h2>
      <h2>table</h2>
      <TableComponent />
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
