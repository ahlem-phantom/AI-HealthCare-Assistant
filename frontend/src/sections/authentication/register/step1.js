import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { Stack } from "@mui/material";
export const FormFirstStep = formikProps => {
  const { errors, touched } = formikProps;
  return (
    <>
<Stack spacing={3}>
<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
  <TextField
    fullWidth
    label="First name"
    {...getFieldProps('firstName')}
    error={Boolean(touched.firstName && errors.firstName)}
    helperText={touched.firstName && errors.firstName}
  />

  <TextField
    fullWidth
    label="Last name"
    {...getFieldProps('lastName')}
    error={Boolean(touched.lastName && errors.lastName)}
    helperText={touched.lastName && errors.lastName}
  />
</Stack>
<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

<TextField
  fullWidth
  autoComplete="username"
  type="email"
  label="Email address"
  {...getFieldProps('email')}
  error={Boolean(touched.email && errors.email)}
  helperText={touched.email && errors.email}
/>

  <TextField
  fullWidth
  autoComplete="phone"
  type="text"
  label="Phone Number"
  {...getFieldProps('phone')}

/>
</Stack>

<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
  <TextField
    fullWidth
    label="First name"
    {...getFieldProps('firstName')}
    error={Boolean(touched.firstName && errors.firstName)}
    helperText={touched.firstName && errors.firstName}
  />

  <TextField
    fullWidth
    label="Last name"
    {...getFieldProps('lastName')}
    error={Boolean(touched.lastName && errors.lastName)}
    helperText={touched.lastName && errors.lastName}
  />
</Stack>
<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
<TextField
  fullWidth
  autoComplete="current-password"
  type={showPassword ? 'text' : 'password'}
  label="Password"
  {...getFieldProps('password')}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
        </IconButton>
      </InputAdornment>
    )
  }}
  error={Boolean(touched.password && errors.password)}
  helperText={touched.password && errors.password}
/>

<TextField
  fullWidth
  autoComplete="current-password"
  type={showPassword ? 'text' : 'password'}
  label="Confirm Password"
  {...getFieldProps('confirmPassword')}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
        </IconButton>
      </InputAdornment>
    )
  }}
  error={Boolean(touched.password && errors.password)}
  helperText={touched.password && errors.password}
/>
</Stack>


</Stack>
</>
  );
};