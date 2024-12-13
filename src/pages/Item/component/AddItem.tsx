import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { addItemSchema } from '../YupSchemas/ItemYupSchema';
import { postItems } from '../utils/itemUtils';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from '@/src/components/styledComponents/Buttons';
import { styled } from '@/styled-system/jsx';
import { css } from '@/styled-system/css';
import { Input } from '../../Login/components/containers';
import { ErrorMessageStyled, LabelInput, TextInput } from '../../Login/components/inputComponents';
import CreateIcon from '@/src/components/styledComponents/CreateIcon';
import { toast } from 'react-toastify';
import Loader from '@/src/components/styledComponents/Loader';

interface props {
  setItems: Function;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  tableId:string;
}
export const ContainerPopUp = styled.div`
position: absolute;
top:0px;
left:0px;
width:100%;
height: 100%;
background-color: #4f4a45a8;
z-index:99;
display:flex;
justify-content: center;
align-items:center;
`
export const StyleForm = css`
display:flex;
flex-direction:column;
align-self:center;
justify-content:center;
gap:24px;
width: 40%;
background-color: token(colors.color3);
color:white;
padding:20px;
border-radius: 24px;

@media (max-width:768px){
width:80%;
}
`
function AddItemForm({ setItems, close,tableId }: props) {
  return (<Formik
    initialValues={{
      name: "",
      stock: 0,
      price: 0
    }}
    validationSchema={addItemSchema}
    onSubmit={async (values, { setSubmitting }) => {
      const payload= [values]

await toast.promise(postItems(payload,tableId), {
  pending: 'Loading...',
  success: 'Item created successfully',
  error: 'Error creating the item'
})
      setItems()
      setSubmitting(false)
      close(false)
    }}
  >{({ isSubmitting, errors, touched }) => (
    <ContainerPopUp >

      <Form className={StyleForm}>
        <div style={{ textAlign: "end" }}>
          <PrimaryButton onClick={() => { close(false) }}> <h3>X</h3></PrimaryButton>
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
        <PrimaryButton type="submit" disabled={isSubmitting}>{isSubmitting?(<Loader />):(<>Create Item</>)}</PrimaryButton>
      </Form>

    </ContainerPopUp>
  )}

  </Formik>)
}


function AddItem({reloadTable}:{reloadTable:Function}) {
  const [popState, setPop] = useState<boolean>(false)
  const { id } = useParams()
  return (<>
    {popState ? <AddItemForm setItems={reloadTable} close={setPop} tableId={id || ""} /> : <></>}
    <PrimaryButton onClick={async () => {
      if (!popState) {
        setPop(true)
      }
    }}><CreateIcon/>AddItem</PrimaryButton></>
  )
}

export default AddItem
