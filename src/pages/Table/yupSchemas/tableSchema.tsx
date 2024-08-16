import { array, InferType, object, string } from "yup";
const objectIdRegex = /^[a-fA-F0-9]{24}$/;
export const createTableSchema = object({
    tableName: string().min(1,"cant be empty").max(20,"cant be larger than 20 characteres").required()
})

export type CreateTable = InferType<typeof createTableSchema> 

export const deleteTableSchema = object({
    tableId: string().required().matches(objectIdRegex)
})
export type DeleteTable = InferType<typeof deleteTableSchema>

export const updateSchema = object({
    tableId:string().required().matches(objectIdRegex),
    newTable: object({
        tableName: string().min(1, "Must not be empty" ).max(15, "must be less than 15 characters").required(),
        items: array()
    })
})
export type UpdateTable = InferType<typeof updateSchema>