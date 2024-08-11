import { InferType, object, string } from "yup";

export const createTableSchema = object({
    tableName: string().min(1,"cant be empty").max(20,"cant be larger than 20 characteres").required()
})

export type CreateTable = InferType<typeof createTableSchema> 