import {  useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"
import {  fetchTables } from "./utils/tableUtils";
import { Link } from "react-router-dom";
import { TableAdapter } from "../../utils/Adapters/TableAdapters";
import { TableData } from "./Interfaces/TableData";
import { TitleBlack } from "@/src/components/styledComponents/Texts";
import { Container, TableItemContainer, TableButton, ButtonsContainer, EditButton, DeleteButton } from "./StyledComponents/Components";
import { EditPopUp } from "./Components/EditPopUp";
import ConfirmationPopUp from "./Components/ConfirmationPopUp";
import EditIcon from "@/src/components/styledComponents/EditIcon";
import DeleteIcon from "@/src/components/styledComponents/DeleteIcon";
export interface props{
  table:{
    tableId:string,
    tableName:string,
    items?:any[] | undefined
  }
  setClose: Function;
}
function Table() {
  const [tables, setTables] = useState<Array<TableData>>([])
  const [tableUpdate,setTableUpdate] = useState<boolean>(false)
  const [deletePopUp,setDeletePopUp] = useState<boolean>(false)
  useEffect(() => {
    fetchTables(setTables)
  }, [])
  const reloadTables = () => {
    fetchTables(setTables)
  }
  const togglePopover = (setState:React.Dispatch<React.SetStateAction<boolean>>)=>{
    setState((prev)=> !prev)
  }
  console.log(tableUpdate)
  return (
    
    <Container>
     
      <CreateTable reload={reloadTables} />
      <div style={{ width: "100%" }}>

        <TitleBlack>Tables</TitleBlack>
        {tables && tables.length !== 0 ? (
          tables.map((tableRaw) => {
            const table = TableAdapter(tableRaw)
            return <TableItemContainer>
               
              <Link to={`${table.tableId}`} key={table.tableId}><TableButton> {table.tableName}</TableButton></Link>
              <ButtonsContainer>
                <EditButton onClick={()=>togglePopover(setTableUpdate)}><EditIcon/></EditButton>
                {tableUpdate && <EditPopUp table={table} setClose={()=>togglePopover(setTableUpdate)} /> }
                <DeleteButton onClick={()=>togglePopover(setDeletePopUp)}><DeleteIcon/></DeleteButton>
                {deletePopUp && <ConfirmationPopUp idTable={table.tableId} closeFunction={() => togglePopover(setDeletePopUp)} reloadTables={reloadTables} />}
              </ButtonsContainer>
            </TableItemContainer>
          })
        ) : (
          "No tables"
        )}
      </div>
    </Container>
  )
}

export default Table
