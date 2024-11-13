import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { AddItemType, addItemSchema } from '../YupSchemas/ItemYupSchema';
import { postItems } from '../utils/itemUtils';
import { useParams } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '@/src/components/styledComponents/Buttons';
import { styled } from '@/styled-system/jsx';
import { css } from '@/styled-system/css';
import { Input } from '../../Login/components/containers';
import { ErrorMessageStyled, LabelInput, TextInput } from '../../Login/components/inputComponents';

interface AddItemForm {
  setItems: React.Dispatch<React.SetStateAction<AddItemType[]>>
}
const ContainerPopUp = styled.div`
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
const StyleForm = css`
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
`
function AddItemForm(props: AddItemForm) {
  return (<Formik
    initialValues={{
      name: "",
      stock: 0,
      price: 0
    }}
    validationSchema={addItemSchema}
    onSubmit={(values, { setSubmitting }) => {
      props.setItems((prevItems) => [
        ...prevItems,
        values
      ]);
      setSubmitting(false)
    }}
  >{({ isSubmitting, errors, touched }) => (
    <ContainerPopUp >
      <Form className={StyleForm}>
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

  </Formik>)
}


function AddItem() {
  const [popState, setPop] = useState<boolean>(false)
  const [items, setItems] = useState<AddItemType[]>([])
  const { id } = useParams()
  return (<>
    {popState ? <AddItemForm setItems={setItems} /> : <></>}
    <PrimaryButton onClick={async () => {
      if (!popState) {
        setPop(true)
      } else {
        await postItems(items, id)
      }
    }}>AddItem</PrimaryButton></>
  )
}

export default AddItem
