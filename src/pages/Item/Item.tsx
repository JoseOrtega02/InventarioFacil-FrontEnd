import { useParams } from "react-router-dom"
import AddItem from "./component/AddItem"
import { useEffect, useState } from "react"
import { getItems } from "./utils/itemUtils"
import { itemAdapter } from "../../utils/Adapters/ItemAdapters"
import { Table } from "./Interfaces/Table"
import { TitleBlack } from "@/src/components/styledComponents/Texts"
import TableComponent from "./component/TableComponent"
import { Item as InterfaceItem } from "./component/UpdatePopUpItem"


function Item() {
  const { id } = useParams()
  const [table, setTable] = useState<Table>({
    tableId: "",
    tableName: "",
    items: []
  })
  useEffect(() => {
    const fetchItems= async ()=>{
       await getItems(id, setTable)

    }
   fetchItems()
  }, [])
  console.log(table.items)
  const itemsConverter=()=>{
    const newItems:InterfaceItem[]=[]
    table?.items.map((itemRaw) => {
      const item = itemAdapter(itemRaw)
      newItems.push(item)
  })
  return newItems
}

  return (
    <>
      <TitleBlack>Table: {table?.tableName}</TitleBlack>
      <TableComponent tableId={table.tableId} items={itemsConverter()}/>
      <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"24px",marginBottom:"24px"}}>
        <AddItem />
      </div>
      

    </>
  )
}

export default Item
