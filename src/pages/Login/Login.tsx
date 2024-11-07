import { Field, Form, Formik, } from "formik"
import { userSchemaLogin } from "./schemaYup/UserSchema";
import { loginFetch } from "./utils/loginUtils";
import { getCRSFToken } from "../../utils/utils";
import img from "@/public/login-image.jpg"
import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import { Container, Input, StyleContainerForm } from "./components/containers";
import { Title, LabelInput, TextInput, ErrorMessageStyled, Image } from "./components/inputComponents";
import { FormClassName } from "./components/classComponents";

function Login() {
  return (<Container>
    <Image src={img} />
    <Formik
      initialValues={{ userName: '', password: '' }}
      validationSchema={userSchemaLogin}
      onSubmit={async (values, { setSubmitting }) => {
        await getCRSFToken()
        await loginFetch(values)
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
              Log In
            </PrimaryButton>
          </Form>
          <h4 style={{ color: "white" }}>Dont have an account? <a href="/register" style={{ color: "#ED7D31" }}>Register</a></h4>
        </StyleContainerForm>
      )}
    </Formik>
  </Container>);
}

export default Login
