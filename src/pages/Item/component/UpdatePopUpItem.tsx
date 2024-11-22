import { PrimaryButton } from '@/src/components/styledComponents/Buttons';
import { Formik, Field } from 'formik';
import { Form } from 'react-router-dom';
import { Input } from '../../Login/components/containers';
import { LabelInput, TextInput, ErrorMessageStyled } from '../../Login/components/inputComponents';
import { updateItems } from '../utils/itemUtils';
import { addItemSchema } from '../YupSchemas/ItemYupSchema';
import { ContainerPopUp, StyleForm } from './AddItem';

export interface Item {
  name: string,
  price: number,
  stock: number,
  id: string,
}
interface props {
  item: Item
  tableId: string
}
export function UpdatePopUpItem({ item,tableId }: props) {
  return (item ? (<Formik
    initialValues={item}
    validationSchema={addItemSchema}
    onSubmit={async (values, { setSubmitting }) => {
      const payload = { itemId: values.id, tableId:tableId , newItem: { name: values.name, price: values.price, stock: values.stock } };
      await updateItems(payload);
      alert("itemUpdated");
    }}
  >{({ isSubmitting, errors, touched }) => (
    <ContainerPopUp>

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

  </Formik>) : (<>Error</>));
}
