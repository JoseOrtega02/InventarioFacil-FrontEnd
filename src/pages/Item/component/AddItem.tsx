import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { AddItemType, addItemSchema } from '../YupSchemas/ItemYupSchema';
import { postItems } from '../utils/itemUtils';
import { useParams } from 'react-router-dom';

interface AddItemForm {
  setItems: React.Dispatch<React.SetStateAction<AddItemType[]>>
}

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
  >{({ isSubmitting }) => (
    <Form>
      <div>
        <label htmlFor="name">Name:</label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage name="name" component="div" className="error" />
      </div>
      <div>
        <label htmlFor="stock">stock:</label>
        <Field type="number" name="stock" id="stock" />
        <ErrorMessage name="stock" component="div" className="error" />
      </div>
      <div>
        <label htmlFor="price">price:</label>
        <Field type="number" name="price" id="price" />
        <ErrorMessage name="price" component="div" className="error" />
      </div>
      <button type="submit" disabled={isSubmitting}>Done</button>
    </Form>
  )}

  </Formik>)
}


function AddItem() {
  const [popState, setPop] = useState<boolean>(false)
  const [items, setItems] = useState<AddItemType[]>([])
  const { id } = useParams()
  return (<>
    {popState ? <AddItemForm setItems={setItems} /> : <></>}
    <button onClick={async () => {
      if (!popState) {
        setPop(true)
      } else {
        await postItems(items, id)
      }
    }}>AddItem</button></>
  )
}

export default AddItem
