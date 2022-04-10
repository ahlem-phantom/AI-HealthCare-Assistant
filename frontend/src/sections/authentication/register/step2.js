import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

export const FormSecondStep = formikProps => {
  const { errors, touched } = formikProps;
  return (
    <>
      <Field
        type="email"
        name="email"
        label="Email Address"
        margin="normal"
        as={TextField}
        error={touched.email && errors.email}
        helperText={touched.email && errors.email}
      />

      <Field name="city" label="City" as={TextField} />

      <Field name="state" label="State" as={TextField} />
    </>
  );
};