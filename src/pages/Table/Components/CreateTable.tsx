import { ErrorMessage, Field, Form, Formik } from "formik"
import { getCRSFToken } from "../../../utils/utils";
import { createTableSchema } from "../yupSchemas/tableSchema";
import { createTable } from "../utils/tableUtils";
import { css } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import { ErrorMessageStyled } from "../../Login/components/inputComponents";

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
interface props {
  reload: Function
}
function CreateTable({ reload }: props) {
  return (
    <Formik initialValues={{ tableName: '', }}
      validationSchema={createTableSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await getCRSFToken()
        await createTable(values)
        reload()
        setSubmitting(false);
      }} >{({ isSubmitting, errors, touched }) => (
        <Form className={FormContainer}>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: "end", gap: "12px" }}>
            <InputContainer>
              <label htmlFor="tableName">Name:</label>
              <Field type="text" name="tableName" id="tableName" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
                <TextInput {...field} type="text" placeholder="Table name" />
              )} />
            </InputContainer>
            <PrimaryButton type="submit" disabled={isSubmitting}>Create Table</PrimaryButton>
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
