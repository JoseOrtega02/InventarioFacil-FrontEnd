import { ErrorMessage, Field, Form, Formik, } from "formik"
import { userSchemaLogin } from "./schemaYup/UserSchema";
import { loginFetch } from "./utils/loginUtils";
import { getCRSFToken, getUser } from "../../utils/utils";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";


function Login() {
  return (<>
    <Formik
      initialValues={{ userName: '', password: '' }}
      validationSchema={userSchemaLogin}
      onSubmit={async (values, { setSubmitting }) => {
        await getCRSFToken()
        await loginFetch(values)
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, handleChange, handleBlur }) => (
        <Form className="">
          <Card title="Simple Card" className="">

            <div className="flex flex-column gap-2 ">
              <label htmlFor="userName">Username: </label>
              <InputText id="userName" name="userName" aria-describedby="username-help" value={values.userName} onChange={handleChange} onBlur={handleBlur} />
              <ErrorMessage name="userName" component="small" className="p-error" />
            </div>

            <div className="flex flex-column gap-2 ">
              <label htmlFor="password">Password: </label>
              <InputText type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
              <ErrorMessage name="password" component="small" className="p-error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Log In
            </button>

          </Card>
        </Form>
      )}
    </Formik>
    <button onClick={() => {
      const user = getUser()
      console.log(user)
    }}>checkUser</button>
  </>
  );
}

export default Login
