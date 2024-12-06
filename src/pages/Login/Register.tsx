import { Field, Form, Formik } from "formik";
import { getCRSFToken } from "../../utils/utils";
import { userSchemaRegister } from "./schemaYup/UserSchema";
import { registerFetch } from "./utils/registerUtils";
import { Container, Input, StyleContainerForm } from "./components/containers";
import { ErrorMessageStyled, Image, LabelInput, TextInput, Title } from "./components/inputComponents";
import image from "@/public/register-image.jpg"
import { FormClassName } from "./components/classComponents";
import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import Loader from "@/src/components/styledComponents/Loader";
function Register() {
  return (
    <Container>
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        validationSchema={userSchemaRegister}
        onSubmit={async (values, { setSubmitting }) => {
          await getCRSFToken()
          await registerFetch(values)
          setSubmitting(false)
        }}
      >{({ isSubmitting, errors, touched }) => (
        <StyleContainerForm>

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

          <h4 style={{ color: "white" }}>Already have an account? <a href="/login" style={{ color: "#ED7D31" }}>Log In</a></h4>
        </StyleContainerForm>
      )}</Formik>
      <Image src={image} />
    </Container>
  )
}
export default Register
