import { Field, Form, Formik, } from "formik"
import { userSchemaLogin } from "./schemaYup/UserSchema";
import { loginFetch } from "./utils/loginUtils";
import { getCRSFToken } from "../../utils/utils";
import img from "@/public/login-image.webp"
import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import { Container, Input, StyleContainerForm } from "./components/containers";
import { Title, LabelInput, TextInput, ErrorMessageStyled, Image } from "./components/inputComponents";
import { FormClassName } from "./components/classComponents";

import useLoggingStore from "../zustand/logginState";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Loader from "@/src/components/styledComponents/Loader";

function Login() {
const navigate = useNavigate()
  const { setIsLogging } = useLoggingStore();
  return (<Container>
    <ToastContainer/>
    <Image src={img} />
    <Formik
      initialValues={{ userName: '', password: '' }}
      validationSchema={userSchemaLogin}
      onSubmit={async (values, { setSubmitting }) => {
        await getCRSFToken()
        await loginFetch(values)
        .then(()=>{
setIsLogging(true)
          toast("Log in Succesfull")
          navigate("/dashboard/tables")
        })
        .catch(()=>{
          toast.error("Error in log in")
        })
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <StyleContainerForm>
          <Title>Log In</Title>
          <Form className={FormClassName}>
            <Input>
              <LabelInput htmlFor="userName">Username: </LabelInput>
              <Field type="text" name="userName" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
                <TextInput {...field} type="text" placeholder="userName" />
              )} id="userName" />
              {errors.userName && touched.userName ? (
                <ErrorMessageStyled>{errors.userName}</ErrorMessageStyled>
              ) : (<></>)}
            </Input>

            <Input>
              <LabelInput htmlFor="password">Password: </LabelInput>
              <Field type="password" name="password" id="password" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
                <TextInput {...field} type="password" placeholder="password" />
              )} />
              {errors.password && touched.password ? (
                <ErrorMessageStyled>{errors.password}</ErrorMessageStyled>
              ) : (<></>)}
            </Input>

            <PrimaryButton type="submit" disabled={isSubmitting}>
              {isSubmitting? (<Loader />): (<>Log In</>)}
            
            </PrimaryButton>
          </Form>
          <h4 style={{ color: "white" }}>Dont have an account? <Link to="/register" style={{ color: "#ED7D31" }}>Register</Link></h4>
        </StyleContainerForm>
      )}
    </Formik>
  </Container>);
}

export default Login
