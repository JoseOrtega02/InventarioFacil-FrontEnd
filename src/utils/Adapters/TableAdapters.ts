import { tableInterface } from "./tableInterface"

export const TableAdapter = (table: tableInterface) => {
  const newTable = {
    tableId: table._id,
    userId: table.owner,
    tableName: table.tableName,
    items: table.items
  }
  return newTable
}
