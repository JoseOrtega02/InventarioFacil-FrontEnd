import { useParams } from "react-router-dom"
import AddItem from "./component/AddItem"
import { useEffect, useState } from "react"
import { getItems } from "./utils/itemUtils"

import { Table } from "./Interfaces/Table"
import { TitleBlack } from "@/src/components/styledComponents/Texts"
import TableComponent from "./component/TableComponent"
import { Item as ItemInterface, UpdatePopUpItem } from "./component/UpdatePopUpItem"
import { ToastContainer } from "react-toastify"
import DeletePopUp from "./component/DeletePopUp"
import { styled } from "@/styled-system/jsx"

const Container = styled.div`
display:flex;
flex-direction:column;
gap:12px;
`

function Item() {
  const { id } = useParams()
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemInterface | null>(null);
  const [deletePopUp,setDeletePopUp] = useState(false)
  const [table, setTable] = useState<Table>({
    tableId: "",
    tableName: "",
    items: []
  })
  const fetchItems= async ()=>{
       await getItems(id, setTable)
    }
  useEffect(() => {
    
   fetchItems()
  }, [])
  
  

  return (
    <Container>
      <TitleBlack>Table: {table?.tableName}</TitleBlack>
      
      <ToastContainer/>

      <TableComponent tableId={table.tableId} setDeletePopUp={setDeletePopUp} items={table.items} setSelectedItem={setSelectedItem} setOpen={()=>setIsPopUpOpen(!isPopUpOpen)} />

      {isPopUpOpen && selectedItem && id ? (
  <UpdatePopUpItem
    item={selectedItem}
    reloadTable={fetchItems}
    tableId={id}
    onClose={() => setIsPopUpOpen(!isPopUpOpen)}
  />
) : null}

{deletePopUp && selectedItem &&id ? ( <DeletePopUp tableId={id} reloadTable={fetchItems} idItem={selectedItem.id} closeFunction={()=> setDeletePopUp(!deletePopUp)}/>): null }

      <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"36px",marginBottom:"24px"}}>
        <AddItem reloadTable={fetchItems}/>
      </div>
      

    </Container>
  )
}

export default Item
