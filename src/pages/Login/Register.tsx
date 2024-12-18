import { Field, Form, Formik } from "formik";
import { getCRSFToken } from "../../utils/utils";
import { userSchemaRegister } from "./schemaYup/UserSchema";
import { registerFetch } from "./utils/registerUtils";
import { Container, Input, StyleContainerForm } from "./components/containers";
import { ErrorMessageStyled, Image, LabelInput, TextInput, Title } from "./components/inputComponents";
import image from "@/public/register-image.webp"
import { FormClassName } from "./components/classComponents";
import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import Loader from "@/src/components/styledComponents/Loader";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useLoggingStore from "../zustand/logginState";
import { Helmet } from "react-helmet";


function Register() {
  const navigate = useNavigate()
 const {setIsLogging} = useLoggingStore()

  return (
    <Container>
      <Helmet>
        <title>Register | Your Business Name</title>
        <meta name="description" content="Create an account to access your dashboard and start managing your business today. Fill out the registration form to get started." />
        <meta name="keywords" content="register, user registration, create account, business management, sign up" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://inventariofacil.netlify.app/register" />
      </Helmet>
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        validationSchema={userSchemaRegister}
        onSubmit={async (values, { setSubmitting }) => {
          await getCRSFToken()
          await registerFetch(values)
          .then(()=>{
            setIsLogging(true)
                      toast("Register Successful")
                      navigate("/dashboard/tables")
                    })
            .catch(()=>{
                      toast.error("Error in log in")
                    })
          setSubmitting(false)
        }}
      >{({ isSubmitting, errors, touched }) => (
        <StyleContainerForm>
<ToastContainer/>
          <Title>Register</Title>
          <Form className={FormClassName}>
            <Input>
              <LabelInput htmlFor="username">Username: </LabelInput>
              <Field type="text" name="username" id="username" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
                <TextInput {...field} type="text" placeholder="userName" />
              )} />
              {errors.username && touched.username ? (
                <ErrorMessageStyled>{errors.username}</ErrorMessageStyled>
              ) : (<></>)}
            </Input>
            <Input>
              <LabelInput htmlFor="email">Email: </LabelInput>
              <Field type="email" name="email" id="email" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
                <TextInput {...field} type="email" placeholder="email" />
              )} />
              {errors.email && touched.email ? (
                <ErrorMessageStyled>{errors.email}</ErrorMessageStyled>
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
            <PrimaryButton type="submit" disabled={isSubmitting}>{isSubmitting?(<Loader />):(<>Register</>)}</PrimaryButton>
          </Form>

          <h4 style={{ color: "white",
                fontFamily: "Arial, sans-serif",
                marginTop: "1rem"
                 }}>Already have an account?{" "}<Link to="/login" style={{ color: "#ED7D31", textDecoration: "underline"  }}>Log In</Link></h4>
        </StyleContainerForm>
      )}</Formik>
      <Image src={image} alt="boxes in a city of japan"
    loading="eager"
    width="600"   
    height="600"/>
    </Container>
  )
}
export default Register
