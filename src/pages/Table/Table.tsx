import {  useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"
import {  fetchTables } from "./utils/tableUtils";
import { TableData } from "./Interfaces/TableData";
import { TitleBlack } from "@/src/components/styledComponents/Texts";
import { Container, } from "./StyledComponents/Components";
import { ItemInterface } from "@/src/utils/Adapters/Interfaces/ItemInterface";
import TableComponent from "./Components/TableComponent";
import { ToastContainer,toast } from "react-toastify";
import { EditPopUp } from "./Components/EditPopUp";
export interface props{
  table:ITable
  setClose: Function;
}
export interface ITable{
  _id:string,
    tableName:string,
    items:ItemInterface[] 
    __v: number;
    owner:string
}
function Table() {
  const [tables, setTables] = useState<Array<TableData>>([])
  const [tableUpdate,setTableUpdate] = useState<boolean>(false)
  const togglePopover = (setState:React.Dispatch<React.SetStateAction<boolean>>)=>{
    setState((prev)=> !prev)
  }
  const [selectedTable,setSelectedTable] = useState<ITable>()
  useEffect(() => {
    fetchTables(setTables)
  }, [])
  const reloadTables = () => {
    fetchTables(setTables)
  }

  return (
    
    <Container>
     
      <CreateTable reload={reloadTables} />
      <ToastContainer/>
      <div style={{ width: "100%" }}>

        <TitleBlack>Tables</TitleBlack>
        {tables && tables.length !== 0 ? (
          tables.map((table) => 
            <TableComponent table={table} reloadTables={reloadTables} togglePopover={togglePopover} setTableUpdate={setTableUpdate} setSelected={setSelectedTable}/>
          )
        ) : (
          "No tables"
        )}
         {tableUpdate && selectedTable  && <EditPopUp table={selectedTable} setClose={()=>togglePopover(setTableUpdate)} /> }
      </div>
    </Container>
  )
}

export default Table
