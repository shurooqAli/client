import * as yup from "yup"; //import all from the yup

export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Not valid email format")
    .required("Email is required"),
  password: yup.string().min(6).max(20).required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"),null],"Passwords does not match!")
    .required(),
});
