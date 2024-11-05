import { ErrorMessage, Field, Form, Formik, } from "formik"
import { userSchemaLogin } from "./schemaYup/UserSchema";
import { loginFetch } from "./utils/loginUtils";
import { getCRSFToken } from "../../utils/utils";
import { styled } from "@/styled-system/jsx";
import img from "@/public/login-image.jpg"
import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import { css } from "@/styled-system/css";
const Container = styled.div`
display:flex;
flex-direction:row;
gap:10px;
padding: 55px 24px;
`
const Image = styled.img`
border-radius: 24px;
`
const StyleContainerForm = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-content:center;
background-color: token(colors.color3);
width: 100%;
border-radius:24px;
padding: 24px 85px;
gap: 65px;
`
const Title = styled.div`
font-family: 'Krona One', sans-serif;
font-size: 36px;
color:white;
`
const Input = styled.div`
display:flex;
flex-direction: column;
`
const TextInput = styled.input`
background-color: token(colors.color1);
padding: 12px 8px;
font-size:18px;
color: token(colors.color2);
font-family: 'PT Sans Narrow', sans-serif;
border-radius: 24px;
`
const LabelInput = styled.label`
color:white;
font-family: 'PT Sans Narrow', sans-serif;
font-size: 24px;
`
const ErrorMessageStyled = styled.h4`
color:red;
font-family: 'Sarala', sans-serif;
font-size:14px;
`
const FormClassName = css`
display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
`

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
