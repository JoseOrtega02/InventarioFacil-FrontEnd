import { ItemInterface } from "./ItemAdapters"

interface tableInterface {
  _id: string,
  owner: string,
  tableName: string,
  items: ItemInterface[],
  __v: number
}
export const TableAdapter = (table: tableInterface) => {
  const newTable = {
    tableId: table._id,
    userId: table.owner,
    tableName: table.tableName,
    items: table.items
  }
  return newTable
}
