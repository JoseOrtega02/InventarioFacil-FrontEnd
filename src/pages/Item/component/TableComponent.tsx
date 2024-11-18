import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import {
  ICellRendererParams,
} from "@ag-grid-community/core";
import { useState } from 'react';
import { ColDef } from "ag-grid-community";
import { myTheme } from './TableTheme';
import { PrimaryButton } from '@/src/components/styledComponents/Buttons';
import { Formik, Field } from 'formik';
import { Form } from 'react-router-dom';
import { Input } from '../../Login/components/containers';
import { LabelInput, TextInput, ErrorMessageStyled } from '../../Login/components/inputComponents';
import { addItemSchema } from '../YupSchemas/ItemYupSchema';
import { ContainerPopUp, StyleForm } from './AddItem';
import { updateItems } from '../utils/itemUtils';
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}
interface Item {
  name: string,
  price: number,
  stock: number,
  id: string,
  tableId: string
}
interface props {
  item: Item
}
function UpdatePopUpItem({ item }: props) {
  return (item ? (<Formik
    initialValues={item}
    validationSchema={addItemSchema}
    onSubmit={async (values, { setSubmitting }) => {
      const payload = { itemId: values.id, tableId: values.tableId, newItem: { name: values.name, price: values.price, stock: values.stock } }
      await updateItems(payload)
      alert("itemUpdated")
    }}
  >{({ isSubmitting, errors, touched }) => (
    <ContainerPopUp >

      <Form className={StyleForm}>
        <div style={{ textAlign: "end" }}>
          <PrimaryButton onClick={() => { }}> <h3>X</h3></PrimaryButton>
        </div>
        <Input>
          <LabelInput htmlFor="name">Name:</LabelInput>
          <Field name="name" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
            <TextInput {...field} type="text" placeholder="Item Name" />
          )} id="name" />
          {errors.name && touched.name ? (
            <ErrorMessageStyled>{errors.name}</ErrorMessageStyled>
          ) : (<></>)}
        </Input>
        <Input>
          <LabelInput htmlFor="stock">stock:</LabelInput>
          <Field render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
            <TextInput {...field} type="number" />
          )} name="stock" id="stock" />

          {errors.stock && touched.stock ? (
            <ErrorMessageStyled>{errors.stock}</ErrorMessageStyled>
          ) : (<></>)}

        </Input>
        <Input>
          <LabelInput htmlFor="price">price:</LabelInput>
          <Field type="number" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
            <TextInput {...field} type="number" />
          )} name="price" id="price" />

          {errors.stock && touched.stock ? (
            <ErrorMessageStyled>{errors.stock}</ErrorMessageStyled>
          ) : (<></>)}        </Input>
        <PrimaryButton type="submit" disabled={isSubmitting}>Done</PrimaryButton>
      </Form>

    </ContainerPopUp>
  )}

  </Formik>) : (<>Error</>))
}
function CustomButton(props: ICellRendererParams) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };
  const itemData: Item = props.data || { stock: 0, price: 0, name: "", id: "", tableId: "" }
  return (<div style={{ display: 'flex', flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", height: "100%" }}>
    <PrimaryButton onClick={() => { togglePopover }}>Update</PrimaryButton>
    {isOpen && (<UpdatePopUpItem item={itemData} />)}
    <PrimaryButton>Delete</PrimaryButton>
    <PrimaryButton>Add to sale</PrimaryButton>
  </div>)
}
function TableComponent() {
  const [rowData, setRowData] = useState<IRow[]>([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric', cellRenderer: CustomButton, pinned: "right", width: 370 },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };
  return (
    <div
      style={{ height: 350, padding: "0px 12px" }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        theme={myTheme}
      />
    </div>
  )
}

export default TableComponent
