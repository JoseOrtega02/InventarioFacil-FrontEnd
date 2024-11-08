import { useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"
import { deleteTable, fetchTables } from "./utils/tableUtils";
import { Link } from "react-router-dom";
import { TableAdapter } from "../../utils/Adapters/TableAdapters";
import { TableData } from "./Interfaces/TableData";
import { styled } from "@/styled-system/jsx";

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items: center;
padding: 24px 20%;
height:80vh;
`
const TitleBlack = styled.h1`
font-size: 34px;
color: token(colors.color2);
font-family: "krona one", sans-serif;
justify-content: center;
text-align:center;
margin:12px 0px;
`
const TableButton = styled.button`
padding: 18px 48px;
border-radius: 24px;
border: 2px solid token(colors.color2);
&:hover{
cursor:pointer;
background-color: #7A746E;
background-opacity:20%;
color:white;
}
`
const DeleteButton = styled.button`
background-color: #B3261E;
border-radius:24px;
color:white;
padding: 5px 10px;
&:hover{
cursor:pointer;
background-opacity:20%;
color:white;
}
`
const EditButton = styled.button`
background-color: token(colors.color2);
border-radius:24px;
color:white;
padding: 5px 10px;
&:hover{
cursor:pointer;
background-opacity:20%;
color:white;
}

`
const TableItemContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
width:100%;
padding:12px 12px;
`
const ButtonsContainer = styled.div`

display:flex;
flex-direction:row;
gap: 10px;

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
