import { useParams } from "react-router-dom"
import AddItem from "./component/AddItem"
import { useEffect, useState } from "react"
import { getItems } from "./utils/itemUtils"

import { Table } from "./Interfaces/Table"
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
    const fetchItems= async ()=>{
       await getItems(id, setTable)

    }
   fetchItems()
  }, [])
  
  

  return (
    <>
      <TitleBlack>Table: {table?.tableName}</TitleBlack>
      {table.items.length != 0 ? (<TableComponent tableId={table.tableId} items={table.items}/>):(<>loading....</>)}
      
      <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"24px",marginBottom:"24px"}}>
        <AddItem />
      </div>
      

    </>
  )
}

export default Item
