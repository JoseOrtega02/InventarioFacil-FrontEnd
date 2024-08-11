import { ErrorMessage, Field, Form, Formik } from "formik"
import { getCRSFToken } from "../../../utils/utils";
import { createTableSchema } from "../yupSchemas/tableSchema";
import { createTable } from "../utils/tableUtils";


function CreateTable() {
  return (
    <Formik initialValues={{ tableName: '', }}
    validationSchema={createTableSchema}
    onSubmit={async (values, { setSubmitting }) => {
      await getCRSFToken()
      await createTable(values)
      setSubmitting(false);
    }} >{({isSubmitting})=>(
        <Form>
            <div>
                <label htmlFor="tableName">Name:</label>
                <Field type="text" name="tableName" id="tableName" />
                <ErrorMessage name="tableName" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>Create Table</button>
        </Form>
    )}</Formik>
  )
}

export default CreateTable