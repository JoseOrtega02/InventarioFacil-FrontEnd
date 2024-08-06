import { ErrorMessage, Field, Form, Formik, } from "formik"
import { userSchemaLogin } from "./schemaYup/UserSchema";
import { loginFetch } from "./utils/loginUtils";


function Login() {
    return (
      <Formik
        initialValues={{ userName: '', password: '' }}
        validationSchema={userSchemaLogin}
        onSubmit={async (values, { setSubmitting }) => {
          await loginFetch(values)
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="userName">Username: </label>
              <Field type="text" name="userName" id="userName" />
              <ErrorMessage name="userName" component="div" className="error" />
            </div>
  
            <div>
              <label htmlFor="password">Password: </label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
  
            <button type="submit" disabled={isSubmitting}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
    );
  }

export default Login