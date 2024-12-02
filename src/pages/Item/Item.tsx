import { useParams } from "react-router-dom"
import AddItem from "./component/AddItem"
import { useEffect, useState } from "react"
import { getItems } from "./utils/itemUtils"

import { Table } from "./Interfaces/Table"
import { TitleBlack } from "@/src/components/styledComponents/Texts"
import TableComponent from "./component/TableComponent"
import { Item as ItemInterface, UpdatePopUpItem } from "./component/UpdatePopUpItem"



function Item() {
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemInterface | null>(null);
  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };
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

      <TableComponent tableId={table.tableId} items={table.items} setSelectedItem={setSelectedItem} setOpen={()=>setIsPopUpOpen(!isPopUpOpen)} />

      {isPopUpOpen && selectedItem && id ? (
  <UpdatePopUpItem
    item={selectedItem}
    tableId={id}
    onClose={() => setIsPopUpOpen(!isPopUpOpen)}
  />
) : null}

      <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"24px",marginBottom:"24px"}}>
        <AddItem />
      </div>
      

    </>
  )
}

export default Item
