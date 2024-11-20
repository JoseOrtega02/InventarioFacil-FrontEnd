import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import { Formik, Field } from "formik";
import { Form } from "react-router-dom";
import { ContainerPopUp, StyleForm } from "../../Item/component/AddItem";
import { Input } from "../../Login/components/containers";
import { LabelInput, TextInput, ErrorMessageStyled } from "../../Login/components/inputComponents";
import { props } from "../Table";
import { updateTable } from "../utils/tableUtils";
import { updateSchema } from "../yupSchemas/tableSchema";

export function EditPopUp({ table, setClose }: props) {
  return (<Formik
    initialValues={table}
    validationSchema={updateSchema}
    onSubmit={async (values) => {
      const payload = { tableId: values.tableId, newTable: { tableName: values.tableName, items: values.items } };
      await updateTable(payload);
      console.log(values.tableName);
    }}>{({ values, errors, touched }) => (
      <ContainerPopUp>
        <Form className={StyleForm}>
          <div style={{ textAlign: "end" }}>
            <PrimaryButton onClick={() => { setClose(false); }}> <h3>X</h3></PrimaryButton>
          </div>
          <Input>
            <LabelInput htmlFor="name">Name:</LabelInput>
            <Field name="name" render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
              <TextInput {...field} type="text" placeholder="Item Name" value={values.tableName} />
            )} id="name" />
            {errors.tableId && touched.tableId ? (
              <ErrorMessageStyled>{errors.tableId}</ErrorMessageStyled>
            ) : (<></>)}
          </Input>
          <PrimaryButton type="submit">Update table</PrimaryButton>
        </Form>
      </ContainerPopUp>

    )}</Formik>);
}
