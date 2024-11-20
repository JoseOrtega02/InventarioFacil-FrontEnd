import { SetStateAction, useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"
import { deleteTable, fetchTables, updateTable } from "./utils/tableUtils";
import { Form, Link } from "react-router-dom";
import { TableAdapter } from "../../utils/Adapters/TableAdapters";
import { TableData } from "./Interfaces/TableData";
import { TitleBlack } from "@/src/components/styledComponents/Texts";
import { Container, TableItemContainer, TableButton, ButtonsContainer, EditButton, DeleteButton } from "./StyledComponents/Components";
import { Field, Formik } from "formik";
import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import { ContainerPopUp, StyleForm } from "../Item/component/AddItem";
import { Input } from "../Login/components/containers";
import { LabelInput, TextInput, ErrorMessageStyled } from "../Login/components/inputComponents";
import { updateSchema } from "./yupSchemas/tableSchema";
interface props{
  table:{
    tableId:string,
    tableName:string,
    items?:any[] | undefined
  }
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
function EditPopUp({table,setClose}:props){
  return(<Formik 
  initialValues={table}
  validationSchema={updateSchema}
   onSubmit={async (values)=>{
    const payload = {tableId:values.tableId,newTable:{tableName:values.tableName,items:values.items}}
    await updateTable(payload)
    console.log(values.tableName)}}>{({values,errors,touched})=>(
<ContainerPopUp >
<Form className={StyleForm}>
  <div style={{ textAlign: "end" }}>
    <PrimaryButton onClick={() => {setClose(false)}}> <h3>X</h3></PrimaryButton>
  </div>
  <Input>
    <LabelInput htmlFor="name">Name:</LabelInput>
    <Field name="name" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
      <TextInput {...field} type="text" placeholder="Item Name" value={values.tableName} />
    )} id="name" />
    {errors.tableId && touched.tableId ? (
      <ErrorMessageStyled>{errors.tableId}</ErrorMessageStyled>
    ) : (<></>)}
  </Input>
  <PrimaryButton type="submit">Update table</PrimaryButton>
  </Form>
  </ContainerPopUp>

  )}</Formik>)
}
function Table() {
  const [tables, setTables] = useState<Array<TableData>>([])
  const [tableUpdate,setTableUpdate] = useState<Boolean>(false)
  useEffect(() => {
    fetchTables(setTables)
  }, [])
  const reloadTables = () => {
    fetchTables(setTables)
  }
  const togglePopover = ()=>{
    
    setTableUpdate((prev)=> !prev)
    console.log(tableUpdate)
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
                <EditButton onClick={togglePopover}>Edit table</EditButton>
                {tableUpdate && <EditPopUp table={table} setClose={togglePopover} /> }
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
