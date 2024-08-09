import { ErrorMessage, Field, Form, Formik } from "formik";
import { getCRSFToken } from "../../utils/utils";
import { userSchemaRegister } from "./schemaYup/UserSchema";
import { registerFetch } from "./utils/registerUtils";

function Register(){
    return (<Formik
                initialValues={{username:"",password:"",email:""}}
                validationSchema={userSchemaRegister}
                onSubmit={async(values, { setSubmitting })=>{
                    await getCRSFToken()
                    await registerFetch(values)
                    setSubmitting(false)
                }}
    >{({isSubmitting})=>(
        <Form>
            <div>
              <label htmlFor="username">Username: </label>
              <Field type="text" name="username" id="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>Registrarse</button>
        </Form>
    )}</Formik>)
} 
export default Register