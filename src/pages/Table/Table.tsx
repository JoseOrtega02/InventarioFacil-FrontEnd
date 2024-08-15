import { useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"
import { fetchTables } from "./utils/tableUtils";
import DeleteTable from "./Components/DeleteTable";

interface TableData {
    _id: string;
    owner: string;
    tableName: string;
    items: string[];
  }
function Table() {
    const [tables,setTables] =useState<Array<TableData>>([])
    useEffect(()=>{
         fetchTables(setTables)
    },[])
    console.log(tables[0])
  return (
    <div>
        <CreateTable/>
        {tables && tables.length !== 0 ?(
        tables.map((table) => (
          <h3 key={table._id}>{table.tableName}</h3>
        ))
      ) : (
        "No tables"
      )}
      <DeleteTable/>
    </div>
  )
}

export default Table