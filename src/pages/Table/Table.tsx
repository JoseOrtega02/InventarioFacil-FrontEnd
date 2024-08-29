import { useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"
import { deleteTable, fetchTables } from "./utils/tableUtils";
import DeleteTable from "./Components/DeleteTable";
import { Link } from "react-router-dom";
import { TableAdapter } from "../../utils/Adapters/TableAdapters";
import { TableData } from "./Interfaces/TableData";

function Table() {
  const [tables, setTables] = useState<Array<TableData>>([])
  useEffect(() => {
    fetchTables(setTables)
  }, [])
  return (
    <div>
      <CreateTable />
      {tables && tables.length !== 0 ? (
        tables.map((tableRaw) => {
          const table = TableAdapter(tableRaw)
          return <><Link to={`${table.tableId}`} key={table.tableId}>{table.tableName}</Link> <button onClick={() => deleteTable({ tableId: table.tableId })}>Delete</button></>
        })
      ) : (
        "No tables"
      )}
      <DeleteTable />
    </div>
  )
}

export default Table
