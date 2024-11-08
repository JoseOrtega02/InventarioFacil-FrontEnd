import { useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"
import { deleteTable, fetchTables } from "./utils/tableUtils";
import { Link } from "react-router-dom";
import { TableAdapter } from "../../utils/Adapters/TableAdapters";
import { TableData } from "./Interfaces/TableData";
import { TitleBlack } from "@/src/components/styledComponents/Texts";
import { Container, TableItemContainer, TableButton, ButtonsContainer, EditButton, DeleteButton } from "./StyledComponents/Components";

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
      <div style={{ width: "100%" }}>

        <TitleBlack>Tables</TitleBlack>
        {tables && tables.length !== 0 ? (
          tables.map((tableRaw) => {
            const table = TableAdapter(tableRaw)
            return <TableItemContainer>
              <Link to={`${table.tableId}`} key={table.tableId}><TableButton> {table.tableName}</TableButton></Link>
              <ButtonsContainer>
                <EditButton>Edit table</EditButton>
                <DeleteButton onClick={async () => {
                  await deleteTable({ tableId: table.tableId })
                  reloadTables()
                }
                }>Delete</DeleteButton>
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
