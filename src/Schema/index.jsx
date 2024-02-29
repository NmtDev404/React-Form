import * as Yup from 'yup'
export const signUpSchema = Yup.object({
    first_name: Yup.string().min(2).max(25).required("Enter your First_name"),
    last_name: Yup.string().min(2).max(25).required("Enter your Last_name"),
    email: Yup.string().email().required("Enter your Email"),
    phone: Yup.number().required("Enter your Number"),
    password: Yup.string().min(8).max(25).required("Enter your password"),
    confirm_password: Yup.string().required("Password must match").oneOf([Yup.ref('password'),null, ]),
})