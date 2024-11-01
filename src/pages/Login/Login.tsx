import { ErrorMessage, Field, Form, Formik, } from "formik"
import { userSchemaLogin } from "./schemaYup/UserSchema";
import { loginFetch } from "./utils/loginUtils";
import { getCRSFToken, getUser } from "../../utils/utils";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";


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

        <div className=" flex mx-auto justify-content-center w-4/6 !p-12 rounded-xl " >

          <div title="Log in" className="w-full p-2 shadow-lg rounded-xl">
            <Form className="flex flex-column justify-content-center gap-5 w-full">

              <div>
                <FloatLabel className="w-full">

                  <label htmlFor="userName">Username: </label>
                  <InputText id="userName" className="w-full" name="userName" aria-describedby="username-help" value={values.userName} onChange={handleChange} onBlur={handleBlur} />
                  <ErrorMessage name="userName" component="small" className="p-error" />
                </FloatLabel>
              </div>

              <div className="flex flex-column">
                <FloatLabel className="w-full flex flex-column">
                  <label htmlFor="password">Password: </label>
                  <Password name="password" id="password" inputClassName="w-full" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                  <ErrorMessage name="password" component="small" className="p-error" />
                </FloatLabel>
              </div>

              <button type="submit" disabled={isSubmitting}>
                Log In
              </button>

            </Form>
          </div>
        </div>
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
