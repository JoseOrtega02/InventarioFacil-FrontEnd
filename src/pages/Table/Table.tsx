import { useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"
import { fetchTables } from "./utils/tableUtils";
import DeleteTable from "./Components/DeleteTable";
import { Link } from "react-router-dom";
import { TableAdapter } from "../../utils/Adapters/TableAdapters";

interface TableData {
  _id: string;
  owner: string;
  tableName: string;
  items: object[];
  __v: number
}
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
          return <Link to={`${table.tableId}`} key={table.tableId}>{table.tableName}</Link>
        })
      ) : (
        "No tables"
      )}
      <DeleteTable />
    </div>
  )
}

export default Table
