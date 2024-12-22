import * as yup from 'yup';

export const LoginValidation=yup.object().shape({
    email:yup.string().email("Incorrect Email format").required("Email should not be empty"),
    password:yup.string().min(6,"Minimum 6 characters").max(10,"Maximum 10 characters").required()
});