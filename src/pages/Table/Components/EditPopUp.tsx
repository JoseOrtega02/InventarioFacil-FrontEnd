import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import { Formik, Field,Form } from "formik";
import { ContainerPopUp, StyleForm } from "../../Item/component/AddItem";
import { Input } from "../../Login/components/containers";
import { LabelInput, TextInput, ErrorMessageStyled } from "../../Login/components/inputComponents";
import { props } from "../Table";
import { updateTable } from "../utils/tableUtils";
import { formSchemaUpdate } from "../yupSchemas/tableSchema";
import CrossIcon from "@/src/components/styledComponents/CrossIcon";
import { toast } from "react-toastify";
import { TableAdapter } from "@/src/utils/Adapters/TableAdapters";
import Loader from "@/src/components/styledComponents/Loader";

export function EditPopUp({ table, setClose }: props) {
  return (
    <Formik
      initialValues={TableAdapter(table)}
      validationSchema={formSchemaUpdate}
      onSubmit={async (values, { setSubmitting }) => {
        const payload = {
          tableId: values.tableId,
          newTable: {
            tableName: values.tableName,
            items: values.items,
          },
        };
        await toast.promise(updateTable(payload), {
          pending: "Loading...",
          success: "Table Edited successfully",
          error: "Error Editing the table",
        });
        setSubmitting(false);
        setClose(false); // Close the popup after submission
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <ContainerPopUp>
          <Form className={StyleForm}>
            {/* Close Button */}
            <div style={{ textAlign: "end" }}>
              <PrimaryButton onClick={() => setClose(false)}>
                <CrossIcon />
              </PrimaryButton>
            </div>

            {/* Table Name Input */}
            <Input>
              <LabelInput htmlFor="tableName">Name:</LabelInput>
              <Field name="tableName">
                {({ field }: any) => (
                  <TextInput
                    {...field}
                    type="text"
                    placeholder="Table Name"
                    value={field.value} // Ensure consistent controlled value
                  />
                )}
              </Field>
              {errors.tableName && touched.tableName && (
                <ErrorMessageStyled>{errors.tableName}</ErrorMessageStyled>
              )}
            </Input>

            {/* Submit Button */}
            <PrimaryButton type="submit" disabled={isSubmitting}>
              {!isSubmitting ? "Update Table" : (<Loader />)}
            </PrimaryButton>
          </Form>
        </ContainerPopUp>
      )}
    </Formik>
  );
}
