import { PrimaryButton } from '@/src/components/styledComponents/Buttons';
import { Formik, Field, FormikHelpers, FieldProps,Form } from 'formik';
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
  onClose: Function
}
interface Values{
  name: string,
  price: number,
  stock: number,
}
export function UpdatePopUpItem({ tableId,item,onClose }: props) {
  const handleSubmit = async (values: Values,
    { setSubmitting }: FormikHelpers<Values>) => {
    console.log("submitting")
    const payload = { itemId: item.id, tableId:tableId , newItem: { name: values.name, price: values.price, stock: values.stock } };
    await updateItems(payload)
    .then((data)=>{console.log(data)})
     setSubmitting(false)
     onClose()
  }
  
  return (<ContainerPopUp>
    <Formik
    initialValues={{
      name:item.name,
      price:item.price,
      stock:item.stock
    }}
    validationSchema={addItemSchema}
    onSubmit={ handleSubmit}
  >{({ isSubmitting, errors, touched ,}) => (
    

    <Form className={StyleForm}>
    <div style={{ textAlign: "end" }}>
      <PrimaryButton onClick={() => { onClose()}}> <h3>X</h3></PrimaryButton>
    </div>
    <Input>
      <LabelInput htmlFor="name">Name:</LabelInput>
      <Field name="name" id="name" >
        {({ field }:FieldProps) => (
    <TextInput {...field} type="text" placeholder="Item Name" />
  )}
      </Field>
      
      {errors.name && touched.name ? (
        <ErrorMessageStyled>{errors.name}</ErrorMessageStyled>
      ) : (<></>)}

    </Input>
    <Input>
      <LabelInput htmlFor="stock">stock:</LabelInput>
      <Field  name="stock" id="stock" >
      {({ field }:FieldProps) => (

<TextInput {...field} type="number" />
)}
      </Field>

      {errors.stock && touched.stock ? (
        <ErrorMessageStyled>{errors.stock}</ErrorMessageStyled>
      ) : (<></>)}

    </Input>
    <Input>
      <LabelInput htmlFor="price">price:</LabelInput>
      <Field type="number"  name="price" id="price" >
      {({ field }:FieldProps) => (

        <TextInput {...field} type="number" />
      )}
      
      </Field>

      {errors.stock && touched.stock ? (
        <ErrorMessageStyled>{errors.stock}</ErrorMessageStyled>
      ) : (<></>)}        </Input>
    <PrimaryButton type="submit" disabled={isSubmitting}>Done</PrimaryButton>
  </Form>

    
  )}

  </Formik></ContainerPopUp>);
}
