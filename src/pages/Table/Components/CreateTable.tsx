import {  Field, Form, Formik } from "formik"
import { getCRSFToken } from "../../../utils/utils";
import { createTableSchema } from "../yupSchemas/tableSchema";
import { createTable } from "../utils/tableUtils";
import { css } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { ErrorMessageStyled } from "../../Login/components/inputComponents";
import CreateIcon from "@/src/components/styledComponents/CreateIcon";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const FormContainer = css`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height: 100px;
gap:12px;
`
const InputContainer = styled.div`
display:flex;
flex-direction:column;
width: 300px;
`
const TextInput = styled.input`
background-color: token(colors.color1);
border: 3px solid token(colors.color2);
padding: 8px 6px;
font-size:14px;
color: token(colors.color2);
font-family: 'PT Sans Narrow', sans-serif;
border-radius: 24px;
`
const CreateButton = styled.button`
display:flex;
align-items:center;
padding: 14px 35px;
line-height: 12px;
height: min-content;
font-family:'PT Sans Narrow', sans-serif;
background-color: token(colors.color4) ;
border-radius:24px;
color:white;
&:hover{cursor:pointer;}`
interface props {
  reload: Function
}
function CreateTable({ reload }: props) {
  return (
    <Formik initialValues={{ tableName: '', }}
      validationSchema={createTableSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await getCRSFToken()
        await toast.promise(createTable(values), {
          pending: 'Loading...',
          success: 'Table created successfully',
          error: 'Error creating the table'
        })
        setSubmitting(false);
        reload()
      }} >{({ isSubmitting, errors, touched }) => (
        <Form className={FormContainer}>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: "end", gap: "12px" }}>
            <InputContainer>
              <label htmlFor="tableName">Name:</label>
              <Field type="text" name="tableName" id="tableName" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
                <TextInput {...field} type="text" placeholder="Table name" />
              )} />
            </InputContainer>
            <CreateButton type="submit">{!isSubmitting?(<><CreateIcon/>Create Table</>):(<>loading...</>)}</CreateButton>
          </div>
          <div>
            {errors.tableName && touched.tableName ? (
              <ErrorMessageStyled>{errors.tableName}</ErrorMessageStyled>
            ) : (<></>)}
          </div>
        </Form>
      )}</Formik>
  )
}

export default CreateTable
