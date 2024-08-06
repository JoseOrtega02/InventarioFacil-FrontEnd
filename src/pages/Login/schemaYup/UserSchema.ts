import {InferType, object, string} from "yup"
export const userSchemaLogin = object({
    userName: string().required().matches(/^[a-zA-Z0-9_-]{3,30}$/,'Username must be 3-30 characters long and can only contain letters, numbers, underscores, and hyphens'),
    password: string().required().min(6,"Password must be 6 letter minimun").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,"Password must contain at least one uppercase letter, one number, and one special character")
})
export type UserLogin =  InferType<typeof userSchemaLogin>

