import { ErrorMessage, Field, Form, Formik } from "formik"
import { deleteTable } from "../utils/tableUtils"
import { getCRSFToken } from "../../../utils/utils"
import { deleteTableSchema } from "../yupSchemas/tableSchema"

const DeleteTable = () => {
    return (
    <Formik
    initialValues={{tableId:""}}
    validationSchema={deleteTableSchema}
    onSubmit={async (values,{ setSubmitting })=>{
        
        await deleteTable(values)
        setSubmitting(false)
    }}
    >
        {({isSubmitting})=>(
        <Form>
            <div>
                <label htmlFor="tableId">TableId:</label>
                <Field type="text" name="tableId" id="tableId" />
                <ErrorMessage name="tableId" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>Delete Table</button>
        </Form>
    )}
    </Formik>
  )
}

export default DeleteTable