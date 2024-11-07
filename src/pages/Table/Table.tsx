import { useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"
import { deleteTable, fetchTables } from "./utils/tableUtils";
import DeleteTable from "./Components/DeleteTable";
import { Link } from "react-router-dom";
import { TableAdapter } from "../../utils/Adapters/TableAdapters";
import { TableData } from "./Interfaces/TableData";
import { styled } from "@/styled-system/jsx";

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding: 24px 20%;
`

function Table() {
  const [tables, setTables] = useState<Array<TableData>>([])
  useEffect(() => {
    fetchTables(setTables)
  }, [])
  const reloadTables = () => {
    fetchTables(setTables)
  }
  return (
    <Container>
      <CreateTable reload={reloadTables} />
      {tables && tables.length !== 0 ? (
        tables.map((tableRaw) => {
          const table = TableAdapter(tableRaw)
          return <>
            <Link to={`${table.tableId}`} key={table.tableId}>{table.tableName}</Link>
            <button onClick={async () => {
              await deleteTable({ tableId: table.tableId })
              reloadTables()
            }
            }>Delete</button>
          </>
        })
      ) : (
        "No tables"
      )}
      <DeleteTable />
    </Container>
  )
}

export default Table
