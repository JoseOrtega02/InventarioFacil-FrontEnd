import { InferType, number, object, string } from "yup";

export const addItemSchema= object({
    name: string().required().min(1,"must not be empty").max(30,"the name is too long"),
    stock: number().positive().integer().required().max(999,"max num reached"),
    price: number().positive().max(99999,"max num reached").required()
})

export interface AddItemType extends InferType<typeof addItemSchema>{}