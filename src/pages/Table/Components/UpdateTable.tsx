import { ErrorMessage, Field, Form, Formik } from "formik"
import { updateTable } from "../utils/tableUtils"
import { updateSchema } from "../yupSchemas/tableSchema"


function UpdateTable() {

    return (
    <Formik
        initialValues={{
            tableId: "",
            newTable:[]
        }}
        validationSchema={updateSchema}
        onSubmit={async (values,{ setSubmitting })=>{
            // await updateTable(values)
            setSubmitting(false)
        }}
        >{({isSubmitting})=>(
            <Form>
                <div>
                    <label htmlFor="tableId">TableId:</label>
                    <Field type="text" name="tableId" id="tableId" />
                    <ErrorMessage name="tableId" component="div" className="error" />
                </div>
                <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="newTable" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="newTable" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="newTable" value="Three" />
              Three
            </label>
          </div>
          <button type="submit" disabled={isSubmitting}>update table</button>
            </Form>
        )}</Formik>
  )
}

export default UpdateTable